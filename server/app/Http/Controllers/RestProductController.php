<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\User;
use App\Models\Owner;


class RestProductController extends Controller
{
    public function getProductByIdUser($idUser)
    {
        $user = User::find($idUser);
        $owner = Owner::where('id_user', $user->id_user)->first();

        $products = Product::where('id_owner', $owner->id_owner)->get();

        return response()->json($products);
    }
}
