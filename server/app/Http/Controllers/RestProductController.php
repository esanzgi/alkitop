<?php

namespace App\Http\Controllers;

use App\Models\Owner;
use App\Models\Product;
use App\Models\User;

class RestProductController extends Controller
{
    public function getProductByIdUser($idUser)
    {
        $user = User::find($idUser);
        $owner = Owner::where('id_user', $user->id_user)->first();

        $products = Product::leftJoin('product_images', function ($join) {
            $join->on('products.id_product', '=', 'product_images.product_id')
                ->whereRaw('product_images.id = (SELECT MIN(id) FROM product_images WHERE product_id = products.id_product)');
        })
            ->where('id_owner', $owner->id_owner)
            ->where('soft_deleted', false)
            ->select(
                'products.id_product',
                'products.name',
                'products.description',
                'products.image',
                'products.id_owner',
                'products.isEco',
                'products.price',
                'products.location',
                'products.category',
                'products.frequency',
                'product_images.image_path as image_path'
            )
            ->get();
        return response()->json($products);
    }
    public function getRentalsByIdUser($idUser)
{
    $user = User::find($idUser);
        
    $rentals = $user->rentals;

    $products = [];

    foreach ($rentals as $rental) {
        $now = now();

        if ($rental->end_date >= $now) {
            $product = Product::leftJoin('product_images', function ($join) {
                $join->on('products.id_product', '=', 'product_images.product_id')
                    ->whereRaw('product_images.id = (SELECT MIN(id) FROM product_images WHERE product_id = products.id_product)');
            })
                ->where('id_product', $rental->id_product)
                ->where('soft_deleted', false) 
                ->select(
                    'products.id_product',
                    'products.name',
                    'products.description',
                    'products.image',
                    'products.id_owner',
                    'products.isEco',
                    'products.price',
                    'products.location',
                    'products.category',
                    'products.frequency',
                    'product_images.image_path as image_path'
                )
                ->first();

            if ($product) {
                $products[] = $product;
            }
        }
    }

    return response()->json($products);
}

public function getOldRentalsByIdUser($idUser)
{
    $user = User::find($idUser);
        
    $rentals = $user->rentals;

    $products = [];

    foreach ($rentals as $rental) {
        $now = now();

        $product = Product::leftJoin('product_images', function ($join) {
            $join->on('products.id_product', '=', 'product_images.product_id')
                ->whereRaw('product_images.id = (SELECT MIN(id) FROM product_images WHERE product_id = products.id_product)');
        })
            ->where('id_product', $rental->id_product)
            ->where('soft_deleted', false)
            ->select(
                'products.id_product',
                'products.name',
                'products.description',
                'products.image',
                'products.id_owner',
                'products.isEco',
                'products.price',
                'products.location',
                'products.category',
                'products.frequency',
                'product_images.image_path as image_path'
            )
            ->first();

        if ($product) {
            $products[] = $product;
        }
    }

    return response()->json($products);
}

}
