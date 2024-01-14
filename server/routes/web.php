<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\OwnerControler;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Owner;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/products/search', [HomeController::class, 'search']);

// Route::get('/', function () {
//     return Inertia::render('Home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/users/profile/{idUser}', [ProfileController::class, 'userPublicProfile']);

Route::get('/produktu-gehitu', function () {
    $erabiltzailea = auth()->user();
    $owner = null;

    if ($erabiltzailea && $erabiltzailea->id_role == 4) {
        $owner = Owner::where('id_user', $erabiltzailea->id_user)->first();
    }
    return Inertia::render('ProduktuGehituPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'user' => $erabiltzailea,
        'owner' => $owner,
    ]);
});

Route::get('/dashboard', function () {
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

    return Inertia::render('Dashboard', [
        'products' => $products,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/produktu-gehitu', function () {
    $erabiltzailea = auth()->user();
    $owner = null;

    if ($erabiltzailea && $erabiltzailea->id_role == 4) {
        $owner = Owner::where('id_user', $erabiltzailea->id_user)->first();
    }

    return Inertia::render('ProduktuGehituPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'user' => $erabiltzailea,
        'owner' => $owner,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::patch('/profileOwner', [ProfileController::class, 'updateOwner'])->name('profileOwner.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get("/new-owner", [OwnerControler::class, "store"]);

Route::get('/panel', function () {
    $erabiltzailea = auth()->user();
    $owner = null;

    if ($erabiltzailea && $erabiltzailea->id_role == 4) {
        $owner = Owner::where('id_user', $erabiltzailea->id_user)->first();
    }

    return Inertia::render("PowerBiPage", [
        'user' => $erabiltzailea,
        'owner' => $owner,
    ]);
});

Route::post("/produktua-sartu", [ProductController::class, 'store']);

Route::get('/product/details/{product}', [ProductController::class, 'goDetails']);

require __DIR__ . '/auth.php';
