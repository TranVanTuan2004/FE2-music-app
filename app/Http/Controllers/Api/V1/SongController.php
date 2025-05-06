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
        $song = $this->songService->find($id);
        return response()->json($song);

    }

    public function getPlayList(Request $request)
    {
        $id = $request->id;
        $playList = $this->songService->getPlayList($id);
        return response()->json($playList);
    }


}
