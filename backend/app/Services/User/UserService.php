<?php
namespace App\Services\User;
use App\Repositories\User\UserRepository;
use App\Services\BaseService;
use Illuminate\Http\Request;

class UserService extends BaseService
{
    public function __construct(UserRepository $userRepository)
    {
        parent::__construct($userRepository);
    }

    public function find($id)
    {
        $user = $this->repo->find($id);
        if (!is_numeric($id)) {
            throw new \InvalidArgumentException('ID không hợp lệ');
        }
        if (!$user) {
            throw new \Exception('User không tồn tại');
        }
        return $user;
    }

    public function update($id, array $data)
    {
        $user = $this->repo->update($id, $data);
        if (!$user) {
            throw new \Exception('User không tồn tại');
        }
        return $user;
    }
}