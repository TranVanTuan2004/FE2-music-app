<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Genre::truncate();

        Genre::create([
            'name' => 'pop',
            'description' => 'nothing to desc'
        ]);
        Genre::create([
            'name' => 'ballad',
            'description' => 'nothing to desc'
        ]);
        Genre::create([
            'name' => 'rap',
            'description' => 'nothing to desc'
        ]);
        Genre::create([
            'name' => 'r&b',
            'description' => 'nothing to desc'
        ]);
    }
}
