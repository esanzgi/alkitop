<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Gate;

class AdminController extends Controller
{
    public function show(){
        
        if (Gate::allows("is_admin")) {
            return Inertia::render("Admin");
        }
        
    }

    public function showUsers(){
        $users=DB::table("users")
        ->where("soft_deleted",0)
        ->get();

        return Inertia::render("ManageUsers",[
            "users"=>$users
        ]);
    }

    public function UserUpdate(Request $request){

        DB::table("users")->where("id_user",$request->input("id_user"))->update([
            "id_role"=>$request->input("role"),
            "email"=>$request->input("email")
        ]);
        
        DB::table("user_details")->where("id_user", $request->input("id_user"))->update([
            "name" => $request->input("name"),
            "country" => $request->input("country"),
            "province" => $request->input("province"),
            "city" => $request->input("city"),
            "birthdate" => $request->input("birthdate"),
            "gender" => $request->input("gender"),
            "bio" => $request->input("bio"),
            "phone_number" => $request->input("phone_number"),
        ]);

        return $this->showUsers();
    }

    public function editUser(Request $request){
        $id_user= $request->input("user_id");

        $user=DB::table("users")->where("id_user",$id_user)->get();
        $details=DB::table("user_details")->where("id_user",$id_user)->get();

        return Inertia::render("EditUser",["user"=>$user, "details"=>$details]);
    }

    public function delete(Request $request){
        $id=$request->input("user_id");

        DB::table("users")
        ->where("id_user",$id)
        ->update([
            "soft_deleted"=>1
        ]);

        return redirect("admin/users");
    }

    public function showProducts(){
        $prods=DB::table("products")->get();

        return Inertia::render("ManageProducts",["products"=>$prods]);
    }

    public function productUpdate(Request $request){
        $data = $request->all();

        DB::table("products")
        ->where("id_product",$request->input("id"))
        ->update([
            "name" => $data["productName"],
            "description" => $data["productDescription"],
            "id_owner" => $data["ownerId"],
            "isEco" => $data["isEco"],
            "price" => $data["productPrice"],
            "location" => $data["productLocation"],
            "category" => $data["productCategory"],
            "frequency" => $data["productFrequency"],
        ]);

        return $this->showProducts();
    }

    public function editProduct(Request $request){
        $product=DB::table("products")->where("id_product", $request->input("product_id"))->get();

        return Inertia("EditProduct", ["product"=>$product]);
    }

    public function productDelete(Request $request){
        $id=$request->input("product_id");
        echo $id;

        DB::table("products")
        ->where("id_product",$id)
        ->delete();

        return redirect("/admin/produktuak");
    }

    public function showRatings(){

        $ratings=DB::table("ratings")->get();
        $users=DB::table("users")->where("soft_deleted",0)->get();
        

        return Inertia::render("ManageRatings",["ratings"=>$ratings, "users"=>$users]);
    }

    public function showRoles(){
        
    }

}
