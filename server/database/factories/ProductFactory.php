<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Database\Eloquent\Factories\Factory;

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

        return [
            'name' => $this->faker->name,
            'description' => $this->faker->paragraph,
            'image' => $this->faker->imageUrl(),
            'id_owner' => \App\Models\Owner::all()->random()->id_owner,
            'isEco' => $this->faker->boolean,
            'price' => $this->faker->randomFloat(2, 1, 100),
            'location' => $this->faker->city,
            'category' => $this->faker->word,
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
