<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_owner';

    public $timestamps = false;

    protected $fillable = [
        'phone_number',
        'dni',
        'id_user',
    ];

    // Relación con el modelo User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function product()
    {
        return $this->hasMany(Product::class, 'id_owner', 'id_owner');
    }
}
