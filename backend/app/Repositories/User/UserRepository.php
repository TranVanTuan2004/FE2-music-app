<?php
namespace App\Repositories\User;

use App\Models\User;
use App\Repositories\BaseRepository;
class UserRepository extends BaseRepository
{
    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    public function update($id, array $data)
    {
        $user = User::find($id);
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        ;
        return $user->update($data);
    }
}