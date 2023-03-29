<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class hoteles extends Model
{

    protected $fillable=['id','Nombre','ciudad','maximoHabitaciones','direciones','nit','estado','estado','created_at','updated_at'] ;

    public function estados()
    {
        return $this->belongsTo(estados::class,'estado');
    }

    public function habitaciones()
    {
        return $this->hasMany(habitaciones::class);
    }

    use HasFactory;
}
