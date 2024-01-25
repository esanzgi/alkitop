<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function show(){
        
        return Inertia::render("Admin");
    }

    public function showUsers(){
        $users=DB::table("users")
        ->where("soft_deleted",0)
        ->get();

        return Inertia::render("ManageUsers",[
            "users"=>$users
        ]);
    }

    public function delete(Request $request){
        $id=$request->input("user_id");

        DB::table("users")
        ->where("id_user",$id)
        ->update([
            "soft_deleted"=>1
        ]);

        return redirect("admin");
    }

    public function showProducts(){
        $prods=DB::table("products")->get();

        return Inertia::render("ManageProducts",["products"=>$prods]);
    }

    public function showRatings(){
        
    }

    public function showRoles(){
        
    }

}
