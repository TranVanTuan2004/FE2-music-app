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
    public function getSongById($id)
    {
        return $this->repo->getSongById($id);
    }

    public function getSongsByArtist($artistId, $limit)
    {
        return $this->repo->getSongsByArtist($artistId, $limit);
    }

}