<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\OwnerControler;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
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

// Route::get('/', function () {
//     return Inertia::render('Home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

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

require __DIR__ . '/auth.php';
