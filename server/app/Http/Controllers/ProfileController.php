<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Owner;
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

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

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

            return redirect()->route('profile.edit')->with('success', 'Información del propietario actualizada con éxito.');
        } else {
            return redirect()->route('dashboard')->with('error', 'Propietario no encontrado.');
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

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
