<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tipos extends Model
{
    protected $fillable=['id','Nombre','estado','created_at','updated_at'] ;
    public function estados()
    {
        return $this->belongsTo(estados::class,'estado');
    }

    /**_______________________________________________________ */
    public function configuraciones()
    {
        return $this->hasMany(configuraciones::class);
    }


    use HasFactory;
}
