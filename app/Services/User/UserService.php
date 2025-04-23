<?php
namespace App\Services\User;
use App\Repositories\User\UserRepository;
use App\Services\BaseService;
use Illuminate\Http\Request;

class UserService extends BaseService
{
    protected $userRepository;
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function paginate($perPage)
    {
        $users = $this->userRepository->pagination($perPage);
        return $users;
    }

    public function updateSatatus($id, $publish)
    {
        $users = $this->userRepository->updateStatus($id, $publish);
        return $users;
    }
}