<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        "/produktua-sartu",
        "/products/addImage",
        "/deleteImage",
        "/updateProduct",
        "/admin/produktuak/delete",
        "/admin/rolak/update",
        "/ProductAlokatu",
        "/admin/users/berreskuratu",
        "/admin/produktuak/berreskuratu",
        "/produktua/delete",
        "/addFavourite",
        "/sendMessage",
        "/profile/addImage"
    ];
}
