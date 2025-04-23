<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

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

    public function refresh()
    {
        return 1;
        // return $this->respondWithToken(auth()->refresh());
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