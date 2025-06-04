<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Validator;

class AuthController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(AuthRequest $request)
    {
        $credentials = [
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ];

        if (!$token = Auth::attempt($credentials)) {
            return response()->json(['error' => 'Thong tin tài khoản hoặc mật khẩu không chính xác'], 401);
        }
        $user = Auth::user();


        $refreshTokenData = [
            'user_id' => $user->id,
            'expires_in' => time() + config('jwt.refresh_ttl')
        ];

        $refresh_token = JWTAuth::getJWTProvider()->encode($refreshTokenData);

        $cookie = cookie('access_token', $token, Auth::factory()->getTTL() * 60 * 24, '/', null, true, true, false, 'None');


        $refreshCookie = cookie('refresh_token', $refresh_token, config('jwt.refresh_ttl'), '/', null, true, true, false, 'None');


        return $this->respondWithToken($token, $refresh_token, $user)->withCookie($cookie)->withCookie($refreshCookie);
    }

    public function logout()
    {
        try {
            // Vô hiệu hóa token hiện tại
            JWTAuth::invalidate(JWTAuth::getToken());
            // Trả về response + cookie rỗng để xóa
            return response()->json(['message' => 'Đăng xuất thành công'])->cookie(
                'token',
                '',
                -1,
                '/',
                null,
                true,
                true,
                false,
                'Strict'
            );
        } catch (\Exception $e) {
            return response()->json(['error' => 'Không thể đăng xuất'], 500);
        }
    }

    public function register(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|string|min:6|confirmed',
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            // ✅ 4. Trả token trong cookie (HttpOnly) nếu muốn
            return response()->json(['message' => 'Đăng ký thành công']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Không thể đăng ký'], 500);
        }
    }

    public function refresh()
    {
        return 1;
    }

    protected function respondWithToken($token, $refresh_token, $user)
    {
        return response()->json([
            'user' => new UserResource($user),
            'access_token' => $token,
            'refresh_token' => $refresh_token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 1
        ]);
    }

    public function me()
    {
        return response()->json([
            "user" => new UserResource(Auth::user())
        ]);
    }

}