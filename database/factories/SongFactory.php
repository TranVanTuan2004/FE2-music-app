<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Song>
 */
class SongFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->name(),
            'artist' => fake()->name(),
            'genre' => fake()->name(),
            'duration' => fake()->numberBetween(200, 500),
            'release_date' => fake()->time(),
            'path' => fake()->name(),
            'image' => fake()->name(),
        ];
    }
}
