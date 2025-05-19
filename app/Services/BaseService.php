<?php
namespace App\Services;
class BaseService
{
    protected $repo;

    public function __construct($repo)
    {
        $this->repo = $repo;
    }
    public function paginate($perPage)
    {
        $users = $this->repo->pagination($perPage);
        return $users;
    }

    public function update($id, array $data)
    {
        $data = $this->repo->update($id, $data);
        return $data;
    }

    public function updateSatatus($id, $publish)
    {
        $users = $this->repo->updateStatus($id, $publish);
        return $users;
    }

    public function getAll()
    {
        return $this->repo->getAll();
    }

    public function find($id)
    {
        return $this->repo->find($id);
    }

    public function delete($id)
    {
        return $this->repo->delete($id);
    }
}