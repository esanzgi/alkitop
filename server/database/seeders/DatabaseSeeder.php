<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Owner;
use App\Models\Product;
use App\Models\Rating;
use App\Models\Rental;
use App\Models\Role;
use App\Models\User;
use App\Models\UserDetail;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // Role::create([

        // ]);

        Role::create([
            'name' => 'admin',
        ]);

        Role::create([
            'name' => 'moderator',
        ]);

        Role::create([
            'name' => 'user',
        ]);

        Role::create([
            'name' => 'owner',
        ]);

        User::create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'id_role' => 1,
            'password' => 'admin',
            'email_verified_at' => '2024-02-08 08:43:34.000',
        ]);

        UserDetail::create([
            'id_user' => 1,
            'name' => 'admin',
            'country' => 'Mongolia',
            'province' => 'Gipuzkoa',
            'city' => 'Oiartzun',
            'profile_image' => null,
            'birthdate' => Carbon::parse('1990-01-01'),
            'gender' => 'Gizona',
            'bio' => 'Alkitop enpresako administratzailea',
            'phone_number' => 638216739,
        ]);

        User::create([
            'name' => 'owner',
            'email' => 'owner@gmail.com',
            'id_role' => 4,
            'password' => 'owner',
            'email_verified_at' => '2024-02-08 08:43:34.000',
        ]);

        UserDetail::create([
            'id_user' => 2,
            'name' => 'owner',
            'country' => 'Mongolia',
            'province' => 'Gipuzkoa',
            'city' => 'Oiartzun',
            'profile_image' => null,
            'birthdate' => Carbon::parse('1990-01-01'),
            'gender' => 'Gizona',
            'bio' => 'Owner',
            'phone_number' => 638216711,
        ]);

        User::create([
            'name' => 'user',
            'email' => 'user@gmail.com',
            'id_role' => 3,
            'password' => 'user',
            'email_verified_at' => '2024-02-08 08:43:34.000',
        ]);

        UserDetail::create([
            'id_user' => 3,
            'name' => 'user',
            'country' => 'Mongolia',
            'province' => 'Gipuzkoa',
            'city' => 'Oiartzun',
            'profile_image' => null,
            'birthdate' => Carbon::parse('1990-01-01'),
            'gender' => 'Gizona',
            'bio' => 'Alkitop aplikazioko erabiltzailea',
            'phone_number' => 638216333,
        ]);

        UserDetail::factory()->count(10)->create();
        //User::factory()->count(10)->create();
        Owner::factory()->count(5)->create();
        Product::factory()->count(100)->create();
        Rating::factory()->count(300)->create();
        Rental::factory()->count(200)->create();
    }
}
