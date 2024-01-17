<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Rating;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    public function createRating(Request $request)
    {
        $product = Product::find($request->id_product);

        Rating::create([
            'id_user' => $request->input('id_user'),
            'id_product' => $request->input('id_product'),
            'title' => $request->input('title'),
            'review' => $request->input('review'),
            'rating' => $request->input('rating'),
        ]);

        return redirect()->route('productDetails', ['product' => $product]);
    }
}
