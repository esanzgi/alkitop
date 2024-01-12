<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
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
        $userId = $request->input('user_id');

        if ($userId === null) {
            return response()->json(['errors' => ['user_id' => 'Betiko errorea']], 422);
        }

        $user = User::find($userId);

        if (!$user) {
            return response()->json(['message' => 'Erabiltzailea ez da aurkitu'], 404);
        }

        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Produktua ez da aurkitu'], 404);
        }

        $user->userSaved()->attach($product->id_product);

        $favorites = $user->userSaved;

        return Inertia::render('Home', ['products' => $favorites])
            ->toResponse(request())
            ->header('X-Inertia-Partial-Data', json_encode(['products']));
    }

}
