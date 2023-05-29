<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function seller()
    {
        return $this->hasOne(Seller::class);
    }
    public function user()
    {
        return $this->hasOne(User::class);
    }
   
    public function orderDetails(){
        return $this->hasMany(OrderDetail::class, 'OrderId');
    }
}
