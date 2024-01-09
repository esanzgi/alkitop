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

        $erabiltzailea = auth()->user();
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
            'user' => $erabiltzailea,
        ]);
    }

    public function search(Request $request)
    {
        $search = $request->input('search');

        // $products = Product::where('name', 'LIKE', "%$search%")
        //     ->with('reviews')
        //     ->get();

        // $products = Product::where('name', 'LIKE', "%$search%")
        //     ->with(['reviews' => function ($query) {
        //         $query->select(\DB::raw('avg(rating) as avg_rating'))
        //             ->groupBy('id_product');
        //     }])
        //     ->get();

        // $products = Product::with(['ratings:id_product,avg(rating) as avg_rating'])
        //     ->where('name', 'LIKE', "%$search%")
        //     ->groupBy('id_product', 'name', 'description', 'image', 'id_owner', 'isEco', 'price', 'location', 'category')
        //     ->get();

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
                \DB::raw('COALESCE(FORMAT(AVG(ratings.rating), IF(AVG(ratings.rating) = ROUND(AVG(ratings.rating)), 0, 1)), 0) as avg_rating')
            )
            ->where('products.name', 'LIKE', "%$search%")
            ->groupBy('products.id_product', 'products.name', 'products.description', 'products.image', 'products.id_owner', 'products.isEco', 'products.price', 'products.location', 'products.category')
            ->get();

        return Inertia::render('ProductsPage', [
            'products' => $products,
            'search' => $search,
        ]);
    }

}
