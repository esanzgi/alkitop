<?php

namespace App\Http\Controllers;

use App\Models\Owner;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\Rating;
use App\Models\Rental;
use App\Models\User;
use App\Models\Saved;
use Carbon\Carbon;
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

        return redirect("/dashboard");
    }

    public function getProductBySearch(Request $request)
    {
        $search = $request->search;
        $perPage = $request->input('perPage', 20);
        // $products = Product::leftJoin('ratings', 'products.id_product', '=', 'ratings.id_product')
        //     ->leftJoin('product_images', 'products.id_product', '=', 'product_images.product_id')
        //     ->select(
        //         'products.id_product',
        //         'products.name',
        //         'products.description',
        //         'products.image',
        //         'products.id_owner',
        //         'products.isEco',
        //         'products.price',
        //         'products.location',
        //         'products.category',
        //         \DB::raw('COALESCE(FORMAT(AVG(ratings.rating), IF(AVG(ratings.rating) = ROUND(AVG(ratings.rating)), 0, 1)), 0) as avg_rating'),
        //         'product_images.image_path as image_path'
        //     )
        //     ->where('products.name', 'LIKE', "%$search%")
        //     ->groupBy('products.id_product', 'products.name', 'products.description', 'products.image', 'products.id_owner', 'products.isEco', 'products.price', 'products.location', 'products.category', 'product_images.image_path')
        //     ->paginate($perPage);

        $products = Product::leftJoin('product_images', function ($join) {
            $join->on('products.id_product', '=', 'product_images.product_id')
                ->whereRaw('product_images.id = (SELECT MIN(id) FROM product_images WHERE product_id = products.id_product)');
        })
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
                'products.frequency',
                'product_images.image_path as image_path'
            )
            ->where('products.name', 'LIKE', "%$search%")
            ->paginate($perPage);

        return response()->json($products);
    }

    public function goDetails(Product $product)
    {
        $images = ProductImage::where('product_id', $product->id_product)->get();
        $product->images = $images;

        $latestRental = $product->rentals()->latest('end_date')->first();

        if ($latestRental && now() < $latestRental->end_date) {
            $latestRental->status = 'En curso';
            $latestRental->save();
        } elseif ($latestRental) {
            $latestRental->status = 'Finalizado';
            $latestRental->save();
        }

        $owner = null;

        if (auth()->user() && auth()->user()->id_role == 4) {
            $owner = Owner::where('id_user', auth()->user()->id_user)->first();
        }

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
        $newProduct['latestRental'] = $latestRental;


        return Inertia::render('ProductDetails', [
            'product' => $newProduct,
            'user' => auth()->user(),
            'owner' => $owner,
        ]);
    }

    public function privateCard(Product $product)
    {
        $images = ProductImage::where('product_id', $product->id_product)->get();
        $product->images = $images;

        $product->rentals = $rentals;

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
    $user_id = $request->input('user_id');
    $product_id = $request->input('product_id');

    $existingSaved = Saved::where('id_user', $user_id)
        ->where('id_product', $product_id)
        ->first();

    if ($existingSaved) {
        $existingSaved->delete();
        $existingSaved->save();
    }

    Saved::create([
        'id_user' => $user_id,
        'id_product' => $product_id,
    ]);

    return redirect('/');
}


public function checkFavorite(Request $request)
{
    $user = User::find($request->input('user_id'));
    $product = Product::find($request->input('product_id'));

    $isFavorite = Saved::where('id_user', $user->id_user)
        ->where('id_product', $product->id_product)
        ->exists();

    return response()->json(['isFavorite' => $isFavorite]);
}




    public function editPage($product)
    {
        $product = Product::find($product);
        $images = ProductImage::where('product_id', $product->id_product)->get();
        $product->images = $images;

        $owner = null;

        if (auth()->user() && auth()->user()->id_role == 4) {
            $owner = Owner::where('id_user', auth()->user()->id_user)->first();
        }

        return Inertia::render('EditProduct', [
            'product' => $product,
            'user' => auth()->user(),
            'owner' => $owner,
        ]);
    }

    public function addImage(Request $request)
    {
        $id_product = $request->input('id');
        $image = $request->file('irudia');

        if ($image) {
            $path = $image->store('', 'public_images');

            ProductImage::create([
                'product_id' => $id_product,
                'image_path' => $path,
            ]);

            return redirect("/editProduct/{$id_product}");
        } else {
            return view('welcome');
        }
    }

    public function deleteImage(Request $request)
    {
        $image = ProductImage::find($request->input('irudia'));
        $id_product = $request->input('id');

        if ($image) {
            $image->delete();
            return redirect("/editProduct/{$id_product}");
        } else {
            return view('welcome');
        }
    }

    public function updateProduct(Request $request)
    {
        $request->validate([
            'price' => 'required|numeric',
            'description' => 'required|string',
            'location' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'frequency' => 'required|string|max:255',
        ]);

        $product = Product::find($request->input('id'));

        if (!$product) {
            return redirect()->back()->with('error', 'No se encontró el producto');
        }

        if ($request->input('isEco') == "on") {
            $eco = true;
        } else {
            $eco = false;
        }
        $product->update([
            'price' => $request->input('price'),
            'description' => $request->input('description'),
            'location' => $request->input('location'),
            'category' => $request->input('category'),
            'frequency' => $request->input('frequency'),
            'isEco' => $eco,
        ]);
        $product->save();

        return redirect("/editProduct/{$request->input('id')}");

    }

    public function productsByCategory($category)
    {
        $products = Product::leftJoin('ratings', 'products.id_product', '=', 'ratings.id_product')
            ->leftJoin('product_images', function ($join) {
                $join->on('products.id_product', '=', 'product_images.product_id')
                    ->where('product_images.id', '=', DB::raw("(SELECT MIN(id) FROM product_images WHERE product_id = products.id_product)"));
            })
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
                'products.frequency',
                DB::raw("COALESCE(FORMAT(AVG(ratings.rating), IF(AVG(ratings.rating) = ROUND(AVG(ratings.rating)), 0, 1)), 0) as avg_rating"),
                'product_images.image_path as image_path'
            )
            ->where('products.category', '=', $category)
            ->groupBy(
                'products.id_product',
                'products.name',
                'products.description',
                'products.image',
                'products.id_owner',
                'products.isEco',
                'products.price',
                'products.location',
                'products.category',
                'products.frequency',
                'product_images.image_path'
            )
            ->get();

        return Inertia::render('ProductsByCategory', [
            'user' => auth()->user(),
            'products' => $products,
        ]);
    }

    public function alokatuPage(Request $request)
    {
        $erabiltzailea = auth()->user();
        $owner = null;

        if ($erabiltzailea && $erabiltzailea->id_role == 4) {
            $owner = Owner::where('id_user', $erabiltzailea->id_user)->first();
        }

        $product = Product::find($request->input('product'));
        $images = ProductImage::where('product_id', $product->id_product)->get();
        $product->images = $images;

        return Inertia::render('ProductAlokatu', [
            'product' => $product,
            'user' => $erabiltzailea,
            'owner' => $owner,
        ]);
    }

    public function alokatu(Request $request)
    {
        $product = Product::find($request->input('product'));
        $user = User::find($request->input('user'));

        $startDate = Carbon::parse($request->input('startDate'));
        $endDate = Carbon::parse($request->input('endDate'));

        $rental = Rental::create([
            'id_product' => $request->input('product'),
            'id_user' => $request->input('user'),
            'start_date' => $startDate,
            'end_date' => $endDate,
            'total_cost' => $request->input('price'),
        ]);

        return redirect('/');
    }

    public function deleteProduct(Request $request)
    {
        $id = $request->input("product_id");

        DB::table("products")
            ->where("id_product", $id)
            ->update(["soft_deleted" => 1]);

        return redirect("/dashboard");
    }

}
