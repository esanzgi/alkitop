<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{

    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $frequencyOptions = ['daily', 'weekly', 'monthly'];
        $allCategories = [
            'Kotxeak',
            'TB, audioa, argazkia',
            'Kontsolak eta bideojokoak',
            'Motorrak',
            "Etxea eta Jardin",
            'Bizikletak',
            'Eraikuntza eta Erreformak',
            'Motorra eta osagarriak',
            'Informatika eta Elektronika',
            'Etxetresna elektrikoak',
            'Industria eta Nekazaritza',
            'Moda eta osagarriak',
            'Kirola eta aisialdia',
            'Zinema, Liburuak eta Musika',
            'Inmobiliaria',
            'Elurra',
            'Zerbitzuak',
            'Musika',
        ];

        return [
            'name' => $this->faker->name,
            'description' => $this->faker->paragraph,
            'image' => $this->faker->imageUrl(),
            'id_owner' => \App\Models\Owner::all()->random()->id_owner,
            'isEco' => $this->faker->boolean,
            'price' => $this->faker->randomFloat(2, 1, 100),
            'location' => $this->faker->city,
            'category' => Arr::random($allCategories),
            'frequency' => $this->faker->randomElement($frequencyOptions),
        ];
    }
    public function configure()
    {
        return $this->afterCreating(function (Product $product) {
            $imageCount = $this->faker->numberBetween(1, 7);

            ProductImage::factory($imageCount)->create([
                'product_id' => $product->id_product,
            ]);
        });
    }
}
