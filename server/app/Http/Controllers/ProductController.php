<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
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
        //erantzunatik soilik datuak hartu
        $jsonContent= $request->getContent();
        
        //Matritze batera pasa
        $datuak= json_decode($jsonContent,true);

        //Array batera pasa
        $datuakArray = $datuak["data"];

        //echo $datuakArray["image"];

        //datu basean sartu
        DB::table("products")->insert([
            'name' => $datuakArray["productname"],
            'description' => $datuakArray["description"],
            'image' => $datuakArray["image"],
            'id_owner' => 1,
            'isEco' => $datuakArray["eco"],
            'price' => $datuakArray["price"],
            'location' => $datuakArray["location"],
            'category' => $datuakArray["category"],
        ]);
        
        return Inertia::render("home");
    }

    public function getProductBySearch($search)
    {
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

        return response()->json($products);
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
}
