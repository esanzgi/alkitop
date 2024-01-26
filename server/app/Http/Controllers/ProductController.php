<?php

namespace App\Http\Controllers;

use App\Models\Owner;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\Rating;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends Controller
{

    public function store(Request $request)
    {
        try {
            DB::beginTransaction();

            $request->validate([
                'name' => 'required|string|max:255',
                'description' => 'required|string',
                'isEco' => 'required|boolean',
                'price' => 'required|numeric',
                'location' => 'required|string|max:255',
                'category' => 'required|string|max:255',
                'frequency' => 'required|string|max:255',
                'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            ]);

            // Obtén el ID del usuario autenticado
            $userId = auth()->id();

            // Busca el propietario asociado con el ID del usuario
            $owner = Owner::where('id_user', $userId)->first();

            // Crea el producto asociando el ID del propietario
            $product = Product::create($request->except('images') + ['id_owner' => $owner->id_owner]);

            // Maneja la carga de imágenes
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    // Guarda la imagen en el sistema de archivos (public/images)
                    $path = $image->store('', 'public_images');
                    $product->images()->create([
                        'image_path' => $path,
                    ]);

                    $attemptedImages[] = $path;
                }
            }

            DB::commit();

        } catch (Exception $e) {
            DB::rollBack();

            foreach ($attemptedImages as $imagePath) {
                Storage::disk('public_images')->delete($imagePath);
            }
        }
    }

    public function getProductBySearch(Request $request)
    {
        $search = $request->search;
        $perPage = $request->input('perPage', 20);
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
                \DB::raw('COALESCE(FORMAT(AVG(ratings.rating), IF(AVG(ratings.rating) = ROUND(AVG(ratings.rating)), 0, 1)), 0) as avg_rating'),
                'product_images.image_path as image_path'
            )
            ->where('products.name', 'LIKE', "%$search%")
            ->groupBy('products.id_product', 'products.name', 'products.description', 'products.image', 'products.id_owner', 'products.isEco', 'products.price', 'products.location', 'products.category', 'product_images.image_path')
            ->paginate($perPage);

        return response()->json($products);
    }

    public function goDetails(Product $product)
    {
        $images = ProductImage::where('product_id', $product->id_product)->get();
        $product->images = $images;

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
            'user'=> auth()->user(),
        ]);
    }

    public function privateCard(Product $product)
    {
        $images = ProductImage::where('product_id', $product->id_product)->get();
        $product->images = $images;

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

        return Inertia::render('PrivateProductDetails', [
            'product' => $newProduct,
        ]);
    }




    public function addFavourite(Request $request)
    {
        $user = User::find($request->input('user_id'));
        $product = Product::find($request->input('product_id'));

        if (!$user) {
            return Inertia::render('Dashboard');
        }
    }

}
