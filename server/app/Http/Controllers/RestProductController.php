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

        $products = Product::leftJoin('product_images', 'products.id_product', '=', 'product_images.product_id')
            ->where('id_owner', $owner->id_owner)
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
                'product_images.image_path as image_path'
            )
            ->get();

        return response()->json($products);
    }

}
