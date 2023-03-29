<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class estados extends Model
{

    protected $fillable=['id','Nombre','created_at','updated_at'] ;
    
    public function habitaciones()
    {
        return $this->hasMany(habitaciones::class);
    }

    
    public function hoteles()
    {
        return $this->hasMany(hoteles::class);
    }

      
    public function acomodaciones()
    {
        return $this->hasMany(acomodaciones::class);
    }

    public function configuraciones()
    {
        return $this->hasMany(configuraciones::class);
    }

    public function tipos()
    {
        return $this->hasMany(tipos::class);
    }
  


    


    

    use HasFactory;
}
