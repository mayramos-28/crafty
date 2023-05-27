<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItems extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function ShoppingCart()
    {
        return $this->belongsTo(ShoppingCarts::class);
    }

    public function Product()
    {
        return $this->belongsTo(Product::class);
    }
}
