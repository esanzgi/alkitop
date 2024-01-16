<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use Illuminate\Http\Request;

class RestRatingController extends Controller
{
    public function getAvgRatingByIdProduct($idProduct)
    {
        $media = Rating::select(
            \DB::raw('Round(COALESCE(FORMAT(AVG(ratings.rating), IF(AVG(ratings.rating) = ROUND(AVG(ratings.rating)), 0, 1)), 0))  as avg_rating')
        )
            ->where('id_product', $idProduct)
            ->get();

        return response()->json($media);
    }

    public function createRating(Request $request)
    {
        $request->validate([
            'id_product' => 'required|exists:products,id',
            'title' => 'required|string',
            'review' => 'required|string',
            'rating' => 'required|numeric|between:0,5',
        ]);

        $rating = Rating::create([
            'id_user' => auth()->id(),
            'id_product' => $request->input('id_product'),
            'title' => $request->input('title'),
            'review' => $request->input('review'),
            'rating' => $request->input('rating'),
        ]);

        return response()->json($rating, 201);
    }
}
