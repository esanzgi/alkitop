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

    public $timestamps = false;

    protected $primaryKey = 'id_product';

    protected $fillable = [
        'name',
        'description',
        'image',
        'id_owner',
        'isEco',
        'price',
        'location',
        'category',
        'frequency'
    ];

    public function owner()
    {
        return $this->belongsTo(Owner::class, 'id_owner', 'id_owner');
    }

    public function user()
    {
        return $this->belongsToMany(User::class, 'saved')->withTimestamps();
    }

    public function reviews()
    {
        return $this->hasMany(Rating::class, 'id_product');
    }

}
