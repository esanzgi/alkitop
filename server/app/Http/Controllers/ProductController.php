<?php

namespace App\Http\Controllers;

use App\Models\Product;
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
            // Obtener los datos del cuerpo de la solicitud
            $jsonContent = $request->getContent();

            // Convertir el contenido JSON a un array asociativo
            $datuakArray = json_decode($jsonContent, true);

            // Obtener el ID del usuario autenticado (propietario)
            $user_id = auth()->id();
            $id_owner = DB::table("owners")->where("id_user", $user_id)->value("id_owner");

            // Crear un nuevo producto en la base de datos
            $product = new Product();
            $product->name = $datuakArray["name"];
            $product->description = $datuakArray["description"];
            $product->id_owner = $id_owner;
            $product->isEco = $datuakArray["isEco"];
            $product->price = $datuakArray["price"];
            $product->location = $datuakArray["location"];
            $product->category = $datuakArray["category"];
            $product->frequency = $datuakArray["frequency"];
            $product->image = 'http://hutsa.jpg';
            $product->save();

            // Obtener el ID del nuevo producto
            $product_id = $product->id;

            // Procesar y guardar las imágenes asociadas al producto
            $images = $datuakArray["images"];
            foreach ($images as $image) {
                // Generar un nombre único para la imagen
                $imageName = uniqid('image_') . '.' . $image->getClientOriginalExtension();

                // Guardar la imagen en el directorio public/images
                $imagePath = $image->storeAs('public/images', $imageName);

                // Guardar la ruta de la imagen en la base de datos
                DB::table("product_images")->insert([
                    'product_id' => $product_id,
                    'image_path' => $imagePath,
                ]);
            }

            return response()->json(['message' => 'Producto creado con éxito'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getProductBySearch(Request $request)
    {$search = $request->search;
        $perPage = $request->input('perPage', 20);
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
            ->paginate($perPage);

        return response()->json($products);
    }

    public function goDetails(Product $product)
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
    public function addFavourite(Request $request)
    {
        $user = User::find($request->input('user_id'));
        $product = Product::find($request->input('product_id'));

        if (!$user) {
            return Inertia::render('Dashboard');
        }
    }

}
