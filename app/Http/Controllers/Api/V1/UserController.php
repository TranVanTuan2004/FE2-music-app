<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Repositories\User\UserRepository;
use App\Services\User\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $userService;
    protected $userRepository;

    public function __construct(UserService $userService, UserRepository $userRepository)
    {
        $this->userService = $userService;
        $this->userRepository = $userRepository;

    }
    public function index(Request $request)
    {
        $perPage = $request->input('perPage', 10);
        $users = $this->userService->paginate($perPage);
        return response()->json([
            'users' => $users->items(),
            'meta' => [
                'current_page' => $users->currentPage(),
                'last_page' => $users->lastPage(),
                'per_page' => $users->perPage(),
                'total' => $users->total(),
            ]
        ]);
    }

    public function updateStatus(Request $request, $id)
    {
        $publish = $request->input('publish');
        $user = $this->userService->updateSatatus($id, $publish);
        return response()->json([
            'message' => "Cập nhật dữ liệu thành công"
        ], 200);
    }
}
