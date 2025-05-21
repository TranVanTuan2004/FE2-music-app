<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;

class ArtistFavoriteController extends Controller
{
    public function __construct()
    {

    }

    public function toggleFavorite($artistId)
    {
        $user = Auth::user();
        $artist = User::findOrFail($artistId);

        if ($user->id === $artist->id) {
            return response()->json(['message' => 'Không thể tự yêu thích chính mình'], 400);
        }

        if ($user->favoriteArtists()->where('artist_id', $artistId)->exists()) {
            $user->favoriteArtists()->detach($artistId);
            return response()->json(['message' => 'Đã bỏ yêu thích', 'status' => 'Xóa yêu thích thành công']);
        } else {
            $user->favoriteArtists()->attach($artistId);
            return response()->json(['message' => 'Đã yêu thích nghệ sĩ', 'status' => 'Thêm nghệ sĩ yêu thích thành công']);
        }
    }
}
