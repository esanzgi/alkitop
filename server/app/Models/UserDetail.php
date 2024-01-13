<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'name',
        'country',
        'province',
        'city',
        'profile_image',
        'birthdate',
        'gender',
        'bio',
        'phone_number',
    ];

    protected $dates = ['birthdate'];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id_user');
    }
}
