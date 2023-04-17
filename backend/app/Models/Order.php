<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseOrder extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function seller()
    {
        return $this->hasOne(Seller::class);
    }
    public function costumer()
    {
        return $this->hasOne(Costumer::class);
    }
    public function address(){
        return $this->hasOne(Address::class);
    }
}
