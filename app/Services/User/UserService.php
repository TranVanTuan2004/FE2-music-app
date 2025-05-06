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




}