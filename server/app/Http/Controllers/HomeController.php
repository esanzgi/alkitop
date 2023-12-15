<?php

namespace App\Http\Controllers;

use App\Http\Controllers\HomeController;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // TODO AVG Rating-arena inner join eginez Produc-ekin

        //$products = Product::orderBy('category', 'desc')->paginate(8);
        //$products = Product::all();

        $products = Product::leftJoin('ratings', 'products.id_product', '=', 'ratings.id_product')
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
                DB::raw("COALESCE(FORMAT(AVG(ratings.rating), IF(AVG(ratings.rating) = ROUND(AVG(ratings.rating)), 0, 1)), 0) as avg_rating")
            )
            ->groupBy(
                'products.id_product',
                'products.name',
                'products.description',
                'products.image',
                'products.id_owner',
                'products.isEco',
                'products.price',
                'products.location',
                'products.category'
            )
            ->get();

        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'products' => $products,
        ]);
    }

    public function search(Request $request)
    {
        $search = $request->input('search');

        // $products = Product::where('name', 'LIKE', "%$search%")
        //     ->orWhere('description', 'LIKE', "%$search%")
        //     ->orWhere('category', 'LIKE', "%$search%")
        //     ->get();

        $products = Product::where('name', 'LIKE', "%$search%")
            ->with('reviews')
            ->get();

        return Inertia::render('ProductsPage', [
            'products' => $products,
        ]);
    }

}
