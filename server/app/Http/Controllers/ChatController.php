<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreChatRequest;
use App\Http\Requests\UpdateChatRequest;
use Illuminate\Http\Request;

use App\Models\Chat;
use Inertia\Inertia;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $erabiltzailea = auth()->user();

        return Inertia::render('ChatPage', [
            'user' => $erabiltzailea]);
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
    public function store(StoreChatRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Chat $chat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chat $chat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChatRequest $request, Chat $chat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chat $chat)
    {
        //
    }

    public function sendMessage(Request $request){
        $id_from=$request->input('user');
        $id_to=$request->input('owner');
        $mezua=$request->input('mezua');

        $chat=Chat::create([
            'id_from'=>$id_from,
            'id_to'=>$id_to,
            'mezua'=>$mezua,
        ]);
        

    }

    public function getChatsById($id){
        $chat=Chat::all();
    }
}
