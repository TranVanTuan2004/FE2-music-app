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
        $query = $this->model->query()->with(['artists:id,name']);
        $seed = crc32(date('Y-m-d'));

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

        $limit = $params['limit'] ?? 20;
        return $query->limit($limit)->orderByRaw("RAND($seed)")->get();
    }


    public function getPlayList(int $id)
    {
        $song = $this->model->findOrFail($id);
        $randomPlayList = $this->model->where('id', '!=', $id)->inRandomOrder()->limit(25)->get();
        $playList = $randomPlayList->prepend($song);
        return $playList;
    }
    public function getSongById($id)
    {
        return $this->model->with('artists:id,name,image')->findOrFail($id);
    }

    public function getSongsByArtist($artistId, $limit = null)
    {
        $query = $this->model->join('artist_songs', 'songs.id', '=', 'artist_songs.song_id')
            ->where('artist_songs.user_id', $artistId)
            ->with('artists:id,name,image')
            ->select('songs.*');

        if ($limit) {
            return $query->limit($limit)->get();
        }
        return $query->get();
    }
}