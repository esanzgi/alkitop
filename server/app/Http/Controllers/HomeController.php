<?php

namespace App\Http\Controllers;

use App\Http\Controllers\HomeController;
use App\Models\Owner;
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
        $owner = null;

        if ($erabiltzailea && $erabiltzailea->id_role == 4) {
            $owner = Owner::where('id_user', $erabiltzailea->id_user)->first();
        }
        // TODO AVG Rating-arena inner join eginez Produc-ekin

        //$products = Product::orderBy('category', 'desc')->paginate(8);
        //$products = Product::all();

        $products = Product::leftJoin('ratings', 'products.id_product', '=', 'ratings.id_product')
            ->leftJoin('product_images', 'products.id_product', '=', 'product_images.product_id')
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
                DB::raw("COALESCE(FORMAT(AVG(ratings.rating), IF(AVG(ratings.rating) = ROUND(AVG(ratings.rating)), 0, 1)), 0) as avg_rating"),
                'product_images.image_path as image_path'
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
                'products.category',
                'products.frequency',
                'product_images.image_path'
            )
            ->get();

        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'products' => $products,
            'user' => $erabiltzailea,
            'owner' => $owner,
        ]);
    }

    public function search(Request $request)
    {
        $search = $request->input('search');

        return Inertia::render('ProductsPage', [
            'search' => $search,
        ]);
    }

}
