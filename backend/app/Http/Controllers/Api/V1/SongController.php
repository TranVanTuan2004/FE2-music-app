<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Services\Song\SongService;
use Illuminate\Http\Request;

class SongController extends Controller
{
    protected $songService;
    public function __construct(SongService $songService)
    {
        $this->songService = $songService;
    }
    public function index(Request $request)
    {
        $params = $request->only(['genre', 'search', 'artist', 'recommend', 'limit']);
        $songs = $this->songService->getSongs($params);
        return response()->json($songs);
    }

    public function getSongById(Request $request)
    {
        $id = $request->id;
        $song = $this->songService->getSongById($id);
        return response()->json($song);
    }

    public function getPlayList(Request $request)
    {
        $id = $request->id;
        $playList = $this->songService->getPlayList($id);
        return response()->json($playList);
    }

    public function getSongsByArtist(Request $request)
    {
        $artistId = $request->id;
        $limit = $request->limit ?? null;
        $songs = $this->songService->getSongsByArtist($artistId, $limit);
        return $songs;
    }

    public function upstream(Request $request, $filename)
    {
        $filePath = storage_path("app/public/song_audio/$filename");

        if (!file_exists($filePath)) {
            abort(404, 'Audio file not found');
        }

        $fileSize = filesize($filePath);
        $start = 0;
        $end = $fileSize - 1;
        $status = 200;
        $headers = [
            'Content-Type' => 'audio/mpeg',
            'Accept-Ranges' => 'bytes',
        ];

        $rangeHeader = $request->header('Range');

        if ($rangeHeader && preg_match('/bytes=(\d*)-(\d*)/', $rangeHeader, $matches)) {
            $start = $matches[1] !== '' ? intval($matches[1]) : $start;
            $end = ($matches[2] !== '') ? intval($matches[2]) : $end;

            if ($start > $end || $start >= $fileSize || $end >= $fileSize) {
                return response('', 416)->withHeaders([
                    'Content-Range' => "bytes */$fileSize"
                ]);
            }

            $status = 206;
            $length = $end - $start + 1;
            $headers['Content-Range'] = "bytes $start-$end/$fileSize";
            $headers['Content-Length'] = $length;

            return response()->stream(function () use ($filePath, $start, $length) {
                $file = fopen($filePath, 'rb');
                fseek($file, $start);
                echo fread($file, $length);
                fclose($file);
            }, $status, $headers);
        }

        $headers['Content-Length'] = $fileSize;

        return response()->stream(function () use ($filePath) {
            readfile($filePath);
        }, 200, $headers);
    }
}
