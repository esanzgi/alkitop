<?php

namespace Database\Factories;

use App\Models\Owner;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Owner>
 */
class OwnerFactory extends Factory
{
    protected $model = Owner::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $availableUsers = User::whereDoesntHave('owner')->inRandomOrder()->get();

        if ($availableUsers->isEmpty()) {
            // No hay usuarios disponibles, puedes manejar esto según tus necesidades
            // Por ejemplo, lanzar una excepción o manejarlo de otra manera
            throw new \Exception('No hay usuarios disponibles para asignar a un propietario.');
        }

        $randomUser = $availableUsers->first();
        return [
            'phone_number' => $this->faker->phoneNumber,
            'dni' => $this->faker->unique()->randomNumber(8),
            'id_user' => $randomUser->id_user,
        ];
    }
}

// \App\Models\User::all()->unique()->random()->id_user,