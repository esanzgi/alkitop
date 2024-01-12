<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\RestRatingController;
use App\Http\Controllers\RestUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
 */

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/products/{search}', [ProductController::class, 'getProductBySearch']);

// User
Route::get('/users/{idOwner}', [RestUserController::class, 'getUserByIdOwner']);

//Rating
Route::get('/ratings/avg/{idProduct}', [RestRatingController::class, 'getAvgRatingByIdProduct']);

Route::middleware('auth:sanctum')->post('/addFavourite/{product_id}', [SavedApiController::class, 'addFavourite'])->name('addFavourite');

//Route::get('/dashboard', [SavedApiController::class, 'favourites'])->name('dashboard');
