<?php

use App\Http\Controllers\Api\V1\ArtistController;
use App\Http\Controllers\Api\V1\ArtistFavoriteController;
use App\Http\Controllers\Api\V1\AudioController;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\FavoriteController;
use App\Http\Controllers\Api\V1\SongController;
use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// Route::prefix('v1')->group(function () {
//     Route::post('/login', [AuthController::class, 'login']);
// });


// Client
Route::group([

    'middleware' => 'jwt',
    'prefix' => 'v1/auth'

], function ($router) {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('me', [AuthController::class, 'me']);
});




Route::group([
    'prefix' => 'v1'
], function ($router) {
    // Songs
    Route::get('songs', [SongController::class, 'index']);
    Route::get('songs/{id}', [SongController::class, 'getSongById']);
    Route::get('songs/{id}/playlist', [SongController::class, 'getPlayList']);
    Route::get('songs/getSongsByArtist/{id}', [SongController::class, 'getSongsByArtist']);
    Route::get('song_audio/{filename}', [SongController::class, 'upstream']);
});


Route::post('/v1/auth/login', [AuthController::class, 'login']);
Route::post('/v1/auth/register', [AuthController::class, 'register']);
Route::post('/v1/auth/refresh', [AuthController::class, 'refresh'])->middleware('jwt');
Route::get('/v1/search', [UserController::class, 'search']);


Route::group([
    'prefix' => 'v1',
    'middleware' => 'jwt',

], function ($router) {
    // Favorite artist
    Route::get('favorite/artists', [UserController::class, 'getAllArtistFavorite']);
    Route::post('favorite/{artistId}/artist', [UserController::class, 'toggleFavoriteArtist']);
    Route::get('favorite/{artistId}/artist', [UserController::class, 'checkFavorite']);



    // Favorite songs

    Route::get('favorite/songs', [UserController::class, 'getAllSongFavorite']);
    Route::get('favorite/{songId}/song', [UserController::class, 'checkFavoriteSong']);
    Route::post('favorite/{songId}/song', [UserController::class, 'toggleFavoriteSong']);
});

Route::group([
    'prefix' => 'v1',
], function ($router) {
    // Favorite artist
    Route::get('artists/suggested', [ArtistController::class, 'suggested']);
    Route::get('artists/{id}', [ArtistController::class, 'getArtistInfo']);
});




// admin
Route::group([
    'middleware' => 'jwt',
    'prefix' => 'v1'

], function ($router) {
    // User
    Route::middleware('role:admin')->group(function () {
        Route::get('users', [UserController::class, 'index']);
        Route::post('users', [UserController::class, 'createUser']);
        Route::put('users/{id}/status', [UserController::class, 'updateStatus']);
        Route::get('users/{id}', [UserController::class, 'getUserById']);
        Route::put('users/{id}', [UserController::class, 'updateUser']);
        Route::delete('users/{id}', [UserController::class, 'deleteUser']);
    });
});
