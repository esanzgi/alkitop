<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //erantzunatik soilik datuak hartu
        $jsonContent= $request->getContent();
        
        //Matritze batera pasa
        $datuak= json_decode($jsonContent,true);

        //Array batera pasa
        $datuakArray=$datuak["data"];

        //echo $datuakArray["image"];
        
        //datu basean sartu
        DB::table("products")->insert([
            'name' => $datuakArray["productname"],
            'description' => $datuakArray["description"],
            'image' => $datuakArray["image"],
            'id_owner' => 1, 
            'isEco' => $datuakArray["eco"],
            'price' => $datuakArray["price"],
            'location' => $datuakArray["location"],
            'category' => $datuakArray["category"],
        ]);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
