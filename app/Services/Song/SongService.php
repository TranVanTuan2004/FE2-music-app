<?php
namespace App\Services\Song;

use App\Repositories\Song\SongRepository;
use App\Services\BaseService;

class SongService extends BaseService
{
    public function __construct(SongRepository $songRepository)
    {
        parent::__construct($songRepository);
    }

    public function getSongs(array $params)
    {

        return $this->repo->getSongs($params);
    }

    public function getPlayList(int $id)
    {

        return $this->repo->getPlayList($id);
    }

}