<?php
namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;

class BaseRepository
{
    protected $model;

    public function __construct($model)
    {
        $this->model = $model;
    }
    public function pagination($perPage)
    {
        return $this->model->paginate($perPage);
    }

    public function updateStatus($id, $publish)
    {
        $user = $this->model->findOrFail($id);
        $user->publish = $publish;
        $user->save();
        return $user;
    }

}