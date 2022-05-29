<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Order;
class Customer extends Model
{
    protected $fillable = [
        'name',
        'email',
        'image',
        'shipping_address',
        'billing_address',
        'user_id',
        'phone'
    ];
    public $timestamps =false;


    // relationship between order and customer
    public function orders(){
        return $this->hasMany(Order::class);
    }
    
}
