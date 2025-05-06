<?php
namespace App\Repositories\Song;

use App\Models\Song;
use App\Repositories\BaseRepository;
use App\Services\BaseService;

class SongRepository extends BaseRepository
{
    public function __construct(Song $model)
    {
        parent::__construct($model);
    }

    public function getSongs(array $params)
    {
        // Lý do dùng query() ở đây: Bạn có thể build nhiều điều kiện khác nhau cho Song mà không thay đổi cách truy vấn mặc định của model. Dễ dàng mở rộng nếu cần.
        $query = $this->model->query();

        if (!empty($params['genre'])) {
            $query->where('genre', $params['genre']);
        }

        if (!empty($params['search'])) {
            $query->where('title', 'like', '%' . $params['search'] . '%');
        }

        if (!empty($params['artist'])) {
            $query->where('artist', $params['artist']);
        }

        if (!empty($params['recommend'])) {
            $query->where('recommended', true);
        }

        // trong trường hợp k có params return all
        if (is_array($params) && count($params) === 0) {
            return $this->getAll();
        }

        $limit = $params['limit'] ?? 20;
        return $query->limit($limit)->get();
    }


    public function getPlayList(int $id)
    {
        $song = $this->model->findOrFail($id);
        $randomPlayList = $this->model->where('id', '!=', $id)->inRandomOrder()->limit(25)->get();
        $playList = $randomPlayList->prepend($song);
        return $playList;
    }
}