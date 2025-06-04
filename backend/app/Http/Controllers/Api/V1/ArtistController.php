<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;

class ArtistController extends Controller
{
    public function __construct()
    {

    }

    public function suggested()
    {
        $artists = User::query()->where('role', '=', 'artist')
            ->select('id', 'name', 'image')
            ->take(12)
            ->get();
        return response()->json($artists);
    }

    public function getArtistInfo(Request $request)
    {
        $id = $request->id;
        $artist = User::with([
            'songs' => function ($query) {
                $query->orderBy('created_at', 'desc')->take(10)->get();
            }
        ])->select('id', 'name', 'image')->findOrFail($id);

        return response()->json($artist);
    }


}
