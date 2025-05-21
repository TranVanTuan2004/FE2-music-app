<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Favorite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    public function __construct()
    {

    }

    public function getFavorites()
    {
        try {
            $user = Auth::user();
            $favorites = $user->favoriteSongs()->with('artists')->get();
            return response()->json([
                'favorites' => $favorites
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function toggleFavorite(Request $request)
    {
        try {
            $song_id = $request->input('songId');
            $user = Auth::user();

            $favorite = $user->favoriteSongs()->where('song_id', $song_id)->first();
            if ($favorite) {
                $user->favoriteSongs()->detach($song_id);
                return response()->json(['message' => 'Xóa yêu thích thành công', 'status' => 'remove']);
            } else {
                $user->favoriteSongs()->attach($song_id, ['isFavorite' => true]);
                return response()->json(['message' => 'Thêm vào yêu thích thành công', 'status' => 'add']);
            }

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong',
                'message' => $e->getMessage()
            ], 500);
        }
    }


}
