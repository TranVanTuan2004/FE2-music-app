<?php

namespace Database\Seeders;

use App\Models\ArtistSong;
use Illuminate\Database\Seeder;

class ArtistSongSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ArtistSong::truncate();
        ArtistSong::create([
            'song_id' => 1,
            'user_id' => 3,
        ]);
        ArtistSong::create([
            'song_id' => 2,
            'user_id' => 3,
        ]);
        ArtistSong::create([
            'song_id' => 3,
            'user_id' => 3,
        ]);
        ArtistSong::create([
            'song_id' => 4,
            'user_id' => 3,
        ]);
        ArtistSong::create([
            'song_id' => 5,
            'user_id' => 3,
        ]);
        ArtistSong::create([
            'song_id' => 6,
            'user_id' => 4,
        ]);
        ArtistSong::create([
            'song_id' => 7,
            'user_id' => 4,
        ]);
        ArtistSong::create([
            'song_id' => 8,
            'user_id' => 4,
        ]);
        ArtistSong::create([
            'song_id' => 9,
            'user_id' => 4,
        ]);
        ArtistSong::create([
            'song_id' => 10,
            'user_id' => 4,
        ]);
        ArtistSong::create([
            'song_id' => 11,
            'user_id' => 4,
        ]);
    }
}
