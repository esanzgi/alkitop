<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckSoftDeleted
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        if (Auth::check()) {
            if (Auth::user()->soft_deleted) {
                Auth::logout(); 
                
                return response()->json('tu cuenta ha sido borrada',401);
            }
        }

        return $response;
    }
}
