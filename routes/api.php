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
Route::post('/v1/auth/refresh', [AuthController::class, 'refresh'])->middleware('jwt');


Route::group([
    'prefix' => 'v1',
    'middleware' => 'jwt',

], function ($router) {
    // Favorite
    Route::get('favorite/getFavorites', [FavoriteController::class, 'getFavorites']);
    Route::post('favorite/toggle', [FavoriteController::class, 'toggleFavorite']);
});

Route::group([
    'prefix' => 'v1',
    'middleware' => 'jwt',

], function ($router) {
    // Favorite artist
    Route::post('artists/favorite', [ArtistFavoriteController::class, 'toggleFavorite']);
});

Route::group([
    'prefix' => 'v1',
], function ($router) {
    // Favorite artist
    Route::get('artists/suggested', [ArtistController::class, 'suggested']);
});




// admin
Route::group([
    'middleware' => 'jwt',
    'prefix' => 'v1'

], function ($router) {
    // User
    Route::middleware('role:admin')->group(function () {
        Route::get('users', [UserController::class, 'index']);
        Route::put('users/{id}/status', [UserController::class, 'updateStatus']);
        Route::get('users/{id}', [UserController::class, 'getUserById']);
        Route::put('users/{id}', [UserController::class, 'updateUser']);
        Route::delete('users/{id}', [UserController::class, 'deleteUser']);
    });
});
