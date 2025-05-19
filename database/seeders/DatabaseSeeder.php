<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        // truncate() -> xóa toàn bộ data để khi fake lại bắt đầu từ 1

        $this->call([
            UserSeeder::class,
            SongSeeder::class,
            GenreSeeder::class,
            ArtistSongSeeder::class
        ]);
    }
}
