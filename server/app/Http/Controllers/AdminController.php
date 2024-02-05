<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Gate;
use App\Models\Product;
use App\Models\ProductImage;

class AdminController extends Controller
{
    public function show(){
        
        if (Gate::allows("is_admin")) {
            return Inertia::render("Admin",["user"=>auth()->user()]);
        }
        
    }

    public function showUsers(){
        $users=DB::table("users")
        ->where("soft_deleted",0)
        ->get();

        return Inertia::render("ManageUsers",[
            "users"=>$users,
            "user"=>auth()->user()
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

        return Inertia::render("EditUser",["user"=>$user, "details"=>$details,"erabiltzailea"=>auth()->user()]);
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

    public function restoreUser(){
        $deletedUsers=DB::table("users")
        ->where("soft_deleted", 1)
        ->get();


        return Inertia::render("RestoreUser",["users"=>$deletedUsers, "user"=>auth()->user()]);
    }

    public function berreskuratu(Request $request){
        DB::table("users")
        ->where("id_user",$request->input("id_user"))
        ->update(["soft_deleted"=>0]);

        return $this->restoreUser();;
    }

    public function showProducts(){
        $prods=DB::table("products")->where("soft_deleted",0)->get();

        return Inertia::render("ManageProducts",["products"=>$prods,"user"=>auth()->user()]);
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
        //$product=DB::table("products")->where("id_product", $request->input("product_id"))->get();

        $product = Product::find($request->input("product_id"));
        $images = ProductImage::where('product_id', $request->input("product_id"))->get();
        $product->images = $images;

        return Inertia::render("AdminEditProduct", ["product"=>$product, "user"=>auth()->user()]);
    }

    public function productDelete(Request $request){
        $id=$request->input("product_id");

        DB::table("products")
        ->where("id_product",$id)
        ->update(["soft_deleted"=>1]);


        return redirect("/admin/produktuak");
    }

    public function showRoles(){
        $users=DB::table("users")->get();

        return Inertia::render("ManageRole",["users"=>$users, "user"=>auth()->user()]);
    }

    public function updateRole(Request $request){
        DB::table("users")
        ->where("id_user",$request->input("userId"))
        ->update(["id_role"=>$request->input("role")]);

        return redirect("/admin/rolak");
    }

    public function restoreProduct(){
        $products=DB::table("products")
        ->where("soft_deleted",1)
        ->get();

        return Inertia::render("RestoreProduct", ["user"=>auth()->user(), "products"=>$products]);
    }

    public function produktuaBerreskuratu(Request $request){
        DB::table("products")
        ->where("id_product",$request->input("id_product"))
        ->update(["soft_deleted"=>0]);

        return $this->restoreProduct();
    }

    public function showRatings(){

        $ratings=DB::table("ratings")->where("soft_deleted",0)->get();
        $users=DB::table("users")->where("soft_deleted",0)->get();
        

        return Inertia::render("ManageRatings",["ratings"=>$ratings, "users"=>$users,"user"=>auth()->user()]);
    }

    public function ratingDelete(Request $request){
        DB::table("ratings")
        ->where("id_rating",$request->input("id_rating"))
        ->update(["soft_deleted"=>1]);

        return redirect("/admin/iritziak");
    }

    public function restoreRating(){
        $ratings=DB::table("ratings")->where("soft_deleted",1)->get();

        return Inertia::render("RestoreRatings", ["user"=>auth()->user(), "ratings"=>$ratings]);
    }

    public function iritziaBerreskuratu(Request $request){
        DB::table("ratings")
        ->where("id_rating",$request->input("id_rating"))
        ->update(["soft_deleted"=>0]);

        return $this->restoreRating();
    }

    public function iritziakEditatu(Request $request){
        $rating=DB::table("ratings")
        ->where("id_rating",$request->input("id_rating"))
        ->get();

        return Inertia::render("EditIritziak",["user"=>auth()->user(),"rating"=>$rating] );
    }

    public function iritziakEguneratu(Request $request){

        DB::table("ratings")
        ->where("id_rating",$request->input("id"))
        ->update([
            'id_user' => $request->input("userId"),
            'id_product' => $request->input("productId"),
            'title' => $request->input("title"),
            'review' => $request->input("review"),
            'rating' => $request->input("rating"),
        ]);
        

    return redirect("/admin/iritziak");
    }

    
}
