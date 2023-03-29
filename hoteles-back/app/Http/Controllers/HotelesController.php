<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\hoteles;



class HotelesController extends Controller
{
    public function index()
    {
        $hotel = hoteles::with('estados')->get();
        
        return $hotel;
    }



    public function store(Request $request)
    {
        $request->validate([

            'nombre' => 'required',
            'estado' => 'required',
            'ciudada' => 'required',
            'maximoHabitaciones' => 'required',
            'direccion' => 'required',
            'nit' => 'required',
            'estado' => 'required'
        
        ]);

        $hotel = new hoteles();
        $hotel->nombre = $request->nombre;
        $hotel->ciudad = $request->ciudada;
        $hotel->maximoHabitaciones = $request->maximoHabitaciones;
        $hotel->direciones = $request->direccion;
        $hotel->nit = $request->nit;
        $hotel->estado = $request->estado;
        $hotel->save();
        return $request;
    }

    public function show($id)
    {
        $hotel = hoteles::find($id);
        return $hotel;
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required',
            'estado' => 'required',
            'ciudada' => 'required',
            'maximoHabitaciones' => 'required',
            'direccion' => 'required',
            'nit' => 'required',
            'estado' => 'required'
        ]);
    
        $hotel = hoteles::with('estados')->find($id);
    
        if (!$hotel) {
            return response()->json([
                'message' => 'Estado no encontrado'
            ], 404);
        }
    
        $hotel->id = $request->id;
        $hotel->nombre = $request->nombre;
        $hotel->ciudad = $request->ciudada;
        $hotel->maximoHabitaciones = $request->maximoHabitaciones;
        $hotel->direciones = $request->direccion;
        $hotel->nit = $request->nit;
        $hotel->estado = $request->estado;
        $hotel->created_at = $request->created_at;
        $hotel->updated_at = $request->updated_at;
    
        $hotel->save();
    
        return response()->json([
            'message' => 'acomodacion actualizado exitosamente',
            'acomodacion' => $hotel
        ], 200);
    }
    


    public function destroy($id)
    {
        $hotel = hoteles::destroy($id);
        return $hotel;
    }
}
