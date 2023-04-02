<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class selleWithdrawalAccount extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function Seller()
    {
        return $this->belongsTo(Seller::class);
    }
}
