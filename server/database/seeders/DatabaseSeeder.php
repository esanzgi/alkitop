<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Product;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Owner;
use App\Models\Rating;

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

        User::factory()->count(5)->create();
        Owner::factory()->count(2)->create();
        Product::factory()->count(10)->create();
        Rating::factory()->count(1)->create();
    }
}
