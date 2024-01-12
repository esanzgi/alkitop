<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Rating;
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
        $jsonContent = $request->getContent();

        //Matritze batera pasa
        $datuak = json_decode($jsonContent, true);

        //Array batera pasa
        $datuakArray = $datuak["data"];

        //ower id-a
        echo $user_id = auth()->id();
        $id_owner = DB::table("owners")->where("id_user", $user_id)->value("id_owner");

        echo $id_owner;
        //$id_ower=auth()->owner()

        //datu basean sartu
        // DB::table("products")->insert([
        //     'name' => $datuakArray["productname"],
        //     'description' => $datuakArray["description"],
        //     'image' => $datuakArray["image"],
        //     'id_owner' => $id_owner,
        //     'isEco' => $datuakArray["eco"],
        //     'price' => $datuakArray["price"],
        //     'location' => $datuakArray["location"],
        //     'category' => $datuakArray["category"],
        //     'frequency'=> $datuakArray["rentalFrequency"]
        // ]);

        //return Inertia::render("home");
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
        $newProduct = [];
        $ratings = Rating::where('id_product', $product->id_product)->get();

        $media = Rating::select(
            \DB::raw('COALESCE(FORMAT(AVG(ratings.rating), IF(AVG(ratings.rating) = ROUND(AVG(ratings.rating)), 0, 1)), 0) as avg_rating')
        )
            ->where('id_product', $product->id_product)
            ->get();

        $newProduct['product'] = $product;
        $newProduct['rating'] = $ratings;
        $newProduct['avgRating'] = $media;

        return Inertia::render('ProductDetails', [
            'product' => $newProduct,
        ]);
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
