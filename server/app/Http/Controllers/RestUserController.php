<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserDetail;

class RestUserController extends Controller
{
    public function getUserByIdOwner($idOwner)
    {

        return response()->json(User::find($idOwner));
    }

    public function addUser(Request $request)
    {

    }

    public function getUserDetailsByIdUser($id) 
    {
        $user = UserDetail::where('id_user', $id)->first();

        return response()->json($user);
    }
}
