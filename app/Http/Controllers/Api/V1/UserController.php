<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Song;
use App\Models\User;
use App\Repositories\User\UserRepository;
use App\Services\User\UserService;
use Auth;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $userService;
    protected $userRepository;

    public function __construct(UserService $userService, UserRepository $userRepository)
    {
        $this->userService = $userService;
        $this->userRepository = $userRepository;

    }
    public function index(Request $request)
    {
        $perPage = $request->input('perPage', 10);
        $users = $this->userService->paginate($perPage);
        return response()->json([
            'users' => $users->items(),
            'meta' => [
                'current_page' => $users->currentPage(),
                'last_page' => $users->lastPage(),
                'per_page' => $users->perPage(),
                'total' => $users->total(),
            ]
        ]);
    }

    public function updateStatus(Request $request, $id)
    {
        $publish = $request->input('publish');
        $user = $this->userService->updateSatatus($id, $publish);
        return response()->json([
            'message' => "Cập nhật dữ liệu thành công"
        ], 200);
    }

    public function createUser(Request $request)
    {
        $user = $request->only([
            'name',
            'phone',
            'email',
            'address',
            'birthday',
            'image',
            'description',
            'password',
            'role'
        ]);
    }

    public function getUserById(Request $request)
    {
        try {
            $id = $request->id;
            $user = $this->userService->find($id);
            return response()->json([
                'user' => $user,
                'message' => "Lấy dữ liệu user thành công"
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function updateUser(Request $request)
    {
        try {
            $id = $request->id;
            $user = $request->only([
                'name',
                'phone',
                'email',
                'address',
                'birthday',
                'image',
                'description',
                'password',
                'role'
            ]);
            $user = $this->userService->update($id, $user);
            if (!$user) {
                return response()->json([
                    'messge' => 'Cập nhật thất bại'
                ], 404);
            }
            return response()->json([
                "message" => "Cập nhật user thành công"
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function deleteUser(Request $request)
    {
        try {
            $id = $request->id;
            $user = $this->userService->delete($id);
            if (!$user) {
                return response()->json([
                    'messge' => 'Xóa user thất bại'
                ], 404);
            }
            return response()->json([
                'messge' => 'Xóa user thành công'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }

    }

    public function toggleFavoriteArtist($artistId)
    {
        $user = Auth::user();
        $artist = User::findOrFail($artistId);

        if ($user->id === $artist->id) {
            return response()->json(['message' => 'Không thể tự yêu thích chính mình'], 400);
        }

        $relation = $user->favoriteArtists()->where('artist_id', $artistId)->first();

        if ($relation) {
            $currentFollow = $relation->pivot->is_follow;

            // Đảo trạng thái is_follow
            $user->favoriteArtists()->updateExistingPivot($artistId, ['is_follow' => !$currentFollow]);

            return response()->json([
                'message' => $currentFollow ? 'Đã bỏ yêu thích' : 'Đã yêu thích nghệ sĩ',
                'isFollow' => !$currentFollow,
            ]);
        } else {
            // Chưa có quan hệ thì tạo mới
            $user->favoriteArtists()->attach($artistId, ['is_follow' => true]);

            return response()->json([
                'message' => 'Đã yêu thích nghệ sĩ',
                'isFollow' => true,
            ]);
        }
    }

    //favorite artist
    public function getAllArtistFavorite()
    {
        $user = Auth::user();
        $favoriteAristList = $user->favoriteArtists()->wherePivot('is_follow', true)->orderBy('artist_user.updated_at', 'desc')->get();
        return response()->json($favoriteAristList);
    }

    public function checkFavorite($artistId)
    {
        $user = Auth::user();
        $isFollow = $user->favoriteArtists()
            ->where('artist_id', $artistId)
            ->wherePivot('is_follow', true)
            ->exists();

        return response()->json(['isFollow' => $isFollow]);
    }


    //favorite song
    public function toggleFavoriteSong($songId)
    {
        try {
            $user = Auth::user();
            $song = Song::findOrFail($songId);
            $relation = $user->favoriteSongs()->where('song_id', $songId)->first();
            if ($relation) {
                $currentFavorite = $relation->pivot->isFavorite;
                $user->favoriteSongs()->updateExistingPivot($songId, ['isFavorite' => !$currentFavorite]);

                return response()->json([
                    'message' => $currentFavorite ? 'Đã bỏ yêu thích' : 'Đã yêu thích bài hát',
                    'isFavorite' => !$currentFavorite,
                ]);
            } else {
                $user->favoriteSongs()->attach([
                    $songId => ['isFavorite' => true]
                ]);

                return response()->json([
                    'message' => 'Đã thêm vào yêu thích',
                    'isFavorite' => true,
                ]);
            }

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function checkFavoriteSong($songId)
    {
        $user = Auth::user();
        $isFavoriteSong = $user->favoriteSongs()
            ->where('song_id', $songId)
            ->wherePivot('isFavorite', true)
            ->exists();

        return response()->json(['isFavorite' => $isFavoriteSong]);
    }

    public function getAllSongFavorite()
    {
        try {
            $user = Auth::user();
            $favorites = $user->favoriteSongs()->wherePivot('isFavorite', true)->orderBy('favorites.updated_at', 'desc')->with('artists')->get();
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


}
