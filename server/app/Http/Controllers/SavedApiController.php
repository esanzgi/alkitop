<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use App\Models\Saved;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SavedApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function favourites()
    {
        $user = auth()->user();

        $products = $user->userSaved();

        return Inertia::render('Dashboard', [
            'products' => $products,
        ]);
    }

    public function addFavourite(Request $request, $id)
{
    $userId = $request->input('data.user_id');

    if ($userId === null) {
        return Inertia::render('Dashboard');
    }

    $user = User::find($userId);

    if (!$user) {
        return response()->json(['message' => 'Usuario no encontrado'], 404);
    }

    $product = Product::find($id);

    if (!$product) {
        return response()->json(['message' => 'Producto no encontrado'], 404);
    }

    $saved = new Saved([
        'id_user' => $user->id_user,
        'id_product' => $product->id_product,
    ]);

    $saved->save();

    // En lugar de renderizar, usa Inertia::location() para redirigir a la ubicación anterior.
    return Inertia::location(url()->previous());
}


}
