<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class configuraciones extends Model
{
    protected $fillable=['id','Nombre','estado','tipos','acomodacion','created_at','updated_at'] ;

    public function tipos()
    {
        return $this->belongsTo(tipos::class,'tipos');
    }

    public function acomodaciones()
    {
        return $this->belongsTo(acomodaciones::class,'acomodacion');
    }
    

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
