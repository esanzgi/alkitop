<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class RestUserController extends Controller
{
    public function getUserByIdOwner($idOwner)
    {

        return response()->json(User::find($idOwner));
    }

    public function addUser(Request $request)
    {

    }
}
