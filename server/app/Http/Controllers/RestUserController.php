<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Owner;
use App\Models\UserDetail;
use Illuminate\Support\Facades\Auth;

class RestUserController extends Controller
{
    public function getUserByIdOwner($idOwner)
    {
        $owner = Owner::find($idOwner);
        $userDetails = UserDetail::where('id_user', $owner->id_user)->first();
        return response()->json($userDetails);
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
