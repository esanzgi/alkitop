<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OwnerControler;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RatingController;
use App\Models\Owner;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
Route::get('/products/category/{category}', [ProductController::class, 'productsByCategory']);

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
    $erabiltzailea = auth()->user();
    $owner = null;

    if ($erabiltzailea && $erabiltzailea->id_role == 4) {
        $owner = Owner::where('id_user', $erabiltzailea->id_user)->first();
    }
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
        'owner' => $owner,
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

    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');

    Route::patch('/profileOwner', [ProfileController::class, 'updateOwner'])->name('profileOwner.update');

    Route::post('/profileOwner', [ProfileController::class, 'updateOwner'])->name('profileOwner.update');

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

Route::get('/product/details/{product}', [ProductController::class, 'goDetails'])->name('productDetails');

Route::post('/addFavourite', [ProductController::class, 'addFavourite']);

Route::post('/avatarEguneratu',[ProfileController::class, 'avatarEguneratu']);

Route::get('/editProduct/{id_product}', [ProductController::class, 'editPage']);

Route::post('/products/addImage',[ProductController::class,'addImage']);

Route::post('/deleteImage',[ProductController::class,'deleteImage']);

Route::post('/updateProduct',[ProductController::class,'updateProduct']);

Route::get('/ProductAlokatu',[ProductController::class,'alokatuPage']);



// RATING ROUTES
Route::post('ratings/create', [RatingController::class, 'createRating']);

//Admin panel routes

Route::get("/admin", [AdminController::class, "show"]);

Route::get("/admin/users", [AdminController::class, 'showUsers']);
Route::get("/admin/users/edit",[AdminController::class, "editUser"]);
Route::get("/admin/users/update",[AdminController::class, "UserUpdate"]);
Route::get("/admin/users/delete", [AdminController::class, 'delete']);

Route::get("/admin/produktuak", [AdminController::class, 'showProducts']);
Route::get("/admin/produktuak/edit",[AdminController::class, "editProduct"]);
Route::get("/admin/produktuak/update",[AdminController::class, "productUpdate"]);
Route::post("/admin/produktuak/delete", [AdminController::class, 'productDelete']);


Route::get("/admin/iritziak", [AdminController::class, 'showRatings']);


Route::get("/admin/rolak", [AdminController::class, 'showRoles']);
Route::post("/admin/rolak/update", [AdminController::class, 'updateRole']);


Route::get("/api/user/role",function(){
    return response()->json(auth()->user()->id_role);
});

require __DIR__ . '/auth.php';
