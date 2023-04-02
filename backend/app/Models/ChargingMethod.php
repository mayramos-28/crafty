<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChargingMethod extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function Costumer()
    {
        return $this->belongsTo(Costumer::class);
    }
}
