<?php

use App\Http\Controllers\Api\V1\AudioController;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\SongController;
use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// Route::prefix('v1')->group(function () {
//     Route::post('/login', [AuthController::class, 'login']);
// });



Route::group([

    'middleware' => 'jwt',
    'prefix' => 'v1/auth'

], function ($router) {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('me', [AuthController::class, 'me']);

});

Route::group([
    'middleware' => 'jwt',
    'prefix' => 'v1'

], function ($router) {
    // User
    Route::get('users', [UserController::class, 'index']);

    Route::middleware('role:admin')->group(function () {
        Route::put('users/{id}/status', [UserController::class, 'updateStatus']);
    });
});

Route::group([
    'prefix' => 'v1'
], function ($router) {
    // Songs
    Route::get('songs', [SongController::class, 'index']);
    Route::get('songs/{id}', [SongController::class, 'getSongById']);
    Route::get('songs/{id}/playlist', [SongController::class, 'getPlayList']);
    Route::get('audio/{filename}', [AudioController::class, 'streamAudio']);

});

Route::post('/v1/auth/login', [AuthController::class, 'login']);
Route::post('/v1/auth/refresh', [AuthController::class, 'refresh'])->middleware('jwt');

