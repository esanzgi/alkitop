<?php

namespace Database\Factories;

use App\Models\Rating;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rating>
 */
class RatingFactory extends Factory
{

    protected $model = Rating::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'review' => $this->faker->paragraph,
            'rating' => $this->faker->numberBetween(1, 5),
            'id_user' => \App\Models\User::all()->random()->id_user,
            'id_product' => \App\Models\Product::all()->random()->id_product,
        ];
    }
}
