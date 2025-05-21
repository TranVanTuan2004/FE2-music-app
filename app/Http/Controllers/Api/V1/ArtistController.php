<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;

class ArtistController extends Controller
{
    public function __construct()
    {

    }

    public function suggested()
    {
        $artists = User::query()->where('role', '=', 'artist')
            ->select('id', 'name', 'image')
            ->inRandomOrder()
            ->take(12)
            ->get();
        return response()->json($artists);
    }
}
