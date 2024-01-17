<?php

namespace Database\Factories;

use App\Models\Rental;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rental>
 */
class RentalFactory extends Factory
{

    protected $model = Rental::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $product = \App\Models\Product::inRandomOrder()->first();
        $user = \App\Models\User::inRandomOrder()->first();

        $existingRental = Rental::where('id_product', $product->id_product)
            ->where('status', 'En curso')
            ->first();

        $status = $existingRental ? 'Finalizado' : 'En curso';

        return [
            'id_product' => \App\Models\Product::factory()->create()->id_product,
            'id_user' => \App\Models\User::factory()->create()->id_user,
            'start_date' => $this->faker->date,
            'end_date' => $this->faker->date,
            'status' => $status,
            'total_cost' => $this->faker->randomFloat(2, 10, 200),
        ];
    }
}
