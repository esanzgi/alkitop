<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Owner;
use App\Models\Product;
use App\Models\Rating;
use App\Models\Rental;
use App\Models\UserDetail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $primaryKey = 'id_user';

    protected $fillable = [
        'name',
        'email',
        'password',
        'first_name',
        'last_name',
        'id_role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function owner()
    {
        return $this->hasOne(Owner::class, 'id_user', 'id_user');
    }

    // public function roles()
    // {
    //     return $this->belongsToMany(Role::class, 'role_user', 'user_id', 'role_id');
    // }

    public function userSaved()
    {
        return $this->belongsToMany(Product::class, 'saved')->withTimestamps();
    }

    public function reviews()
    {
        return $this->hasMany(Rating::class);
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function userDetails()
    {
        return $this->hasOne(UserDetail::class, 'id_user', 'id_user');
    }

    public function rentals()
    {
        return $this->hasMany(Rental::class, 'id_user');
    }

}
