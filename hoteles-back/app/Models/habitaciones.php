<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class habitaciones extends Model
{
    protected $fillable=['id','Nombre','hotel','configuracion','estado','created_at','updated_at'] ;

    public function configuraciones()
    {
        return $this->belongsTo(configuraciones::class,'configuracion');
    }


    public function hoteles()
    {
        return $this->belongsTo(hoteles::class,'hotel');
    }


    public function estados()
    {
        return $this->belongsTo(estados::class,'estado');
    }

    


    use HasFactory;
}
