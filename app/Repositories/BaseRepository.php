<?php
namespace App\Repositories;


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

    public function getAll()
    {
        return $this->model->all();
    }

    public function find($id)
    {
        return $this->model->findOrFail($id);
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update($id, array $data)
    {
        $user = $this->find($id);
        return $user->update($data);
    }

    public function delete($id)
    {
        return $this->model->destroy($id);
    }

}