<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\RestRatingController;
use App\Http\Controllers\RestUserController;
use App\Http\Controllers\RestProductController;
use App\Http\Controllers\SavedApiController;
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


// User
Route::get('/users/{idOwner}', [RestUserController::class, 'getUserByIdOwner']);
Route::get('/users/details/{id}', [RestUserController::class, 'getUserDetailsByIdUser']);

//Rating
Route::get('/ratings/avg/{idProduct}', [RestRatingController::class, 'getAvgRatingByIdProduct']);


//Route::get('/dashboard', [SavedApiController::class, 'favourites'])->name('dashboard');

// Product
Route::get('/products/user/{idUser}', [RestProductController::class, 'getProductByIdUser']);
Route::get('/products', [ProductController::class, 'getProductBySearch']);
