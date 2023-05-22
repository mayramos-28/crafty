<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function User()
    {
        return $this->belongsTo(User::class);
    }

   public function sellerWithdrawalAccount()
    {
        return $this->hasOne(sellerWithdrawalAccount::class);
    }
    public function Order(){
        return $this->hasMany(Order::class);
    }
   
}
