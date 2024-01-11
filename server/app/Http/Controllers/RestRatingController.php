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

    public function aa(Request $request)
    {

    }
}
