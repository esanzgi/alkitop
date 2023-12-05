<?php

namespace App\Models;

use App\Models\Product;
use App\Models\Rating;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_product';

    public $timestamps = false;

    protected $fillable = [
        'name',
        'description',
        'image',
        'id_owner',
        'isEco',
        'price',
        'location',
        'category',
    ];

    public function owner()
    {
        return $this->belongsTo(Owner::class, 'id_owner', 'id_owner'); // Reemplaza 'Owner' con el nombre real de tu modelo
    }

    public function user()
    {
        return $this->belongsToMany(User::class, 'saved')->withTimestamps();
    }

    public function reviews()
    {
        return $this->hasMany(Rating::class);
    }

}
