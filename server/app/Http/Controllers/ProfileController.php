<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Owner;
use App\Models\UserDetail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;


class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {

        $erabiltzailea = auth()->user();
        $owner = null;

        if ($erabiltzailea && $erabiltzailea->id_role == 4) {
            $owner = Owner::where('id_user', $erabiltzailea->id_user)->first();
        }

        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'owner' => $owner,
        ]);
    }

    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->validate([
            'name' => ['required', 'alpha'],
            'email' => ['required'],
        ]);

        $user = auth()->user();

        if ($user) {
            $user->name = $request->input('name');
            $user->email = $request->input('email');

            $user->save();
        }

        $userDetail = $user->userDetails;

        if ($userDetail) {
            $userDetail->country = $request->filled('country') ? $request->input('country') : $userDetail->country;
            $userDetail->city = $request->filled('city') ? $request->input('city') : $userDetail->city;
            $userDetail->province = $request->filled('province') ? $request->input('province') : $userDetail->province;

            $userDetail->save();
        }

        return Redirect::route('profile.edit');
    }

    public function updateOwner(Request $request)
    {
        $validatedData = $request->validate([
            'tlf' => ['required', 'numeric', 'digits:9'],
            'dni' => ['required', 'regex:/^[0-9]{8}[a-zA-Z]$/'],
        ]);

        $owner = auth()->user()->owner;

        if ($owner) {
            $owner->phone_number = $request->input('tlf');
            $owner->dni = $request->input('dni');
            $owner->save();

            return Redirect::route('profile.edit');
        }
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        $user->soft_deleted = true;

        $user->save();

        Auth::logout();

        return Redirect::to('/');
    }

    public function userPublicProfile($idUser)
    {
        $user = UserDetail::where('id_user', $idUser)->first();
        return Inertia::render('UserPublicProfile', [
            'user' => $user,
        ]);
    }

    public function avatarEguneratu(Request $request)
    {
        $userDetailsId = $request->input('userDetails');

        $userDetail = UserDetail::find($userDetailsId);

        $profileImage = $request->file('irudi');

        $userDetail->profile_image = $profileImage;


        if ($profileImage) {
            $path = $profileImage->store('', 'public_avatars');
            $userDetail->update([
                'profile_image' => $path,
            ]);
        } else {
            echo 'No se proporcionó ninguna imagen.';
        }

        $userDetail->save();

        return Redirect::route('profile.edit');

    }
    public function addImage(Request $request)
    {
        $id_product = $request->input('id');
        $image = $request->file('irudia');

        if ($image) {
            $path = $image->store('', 'public_images');

            ProductImage::create([
                'product_id' => $id_product,
                'image_path' => $path,
            ]);

            return redirect("/editProduct/{$id_product}");
        }
    }

}
