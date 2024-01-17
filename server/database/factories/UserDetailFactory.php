<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\UserDetail; 
use App\Models\User;; 

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserDetail>
 */
class UserDetailFactory extends Factory
{
    protected $model = UserDetail::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_user' => User::factory()->create()->id_user,
            'name' => $this->faker->name,
            'country' => $this->faker->country,
            'province' => $this->faker->state,
            'city' => $this->faker->city,
            'profile_image' => $this->faker->imageUrl(),
            'birthdate' => $this->faker->date,
            'gender' => $this->faker->randomElement(['Gizona', 'Emakumea', 'Beste bat']),
            'bio' => $this->faker->paragraph,
            'phone_number' => $this->faker->phoneNumber,
        ];
    }
}
