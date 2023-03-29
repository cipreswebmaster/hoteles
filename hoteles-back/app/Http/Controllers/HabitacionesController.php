<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\habitaciones;

class HabitacionesController extends Controller
{
    public function index()
    {
        $habitacion = habitaciones::with('estados')->with('hoteles')->with('configuraciones')->get();
        return response()->json($habitacion);
        
        
    }



    public function store(Request $request)
    {
        $request->validate([

            
            'estado'=> 'required',
            'configuracion'=> 'required',
            'hotel'=> 'required'

        ]);

        $habitacion = new habitaciones();
        $habitacion->nombre = $request->nombre;
        $habitacion->hotel = $request->hotel;
        $habitacion->estado = $request->estado;
        $habitacion->configuracion = $request->configuracion;
        $habitacion->save();
        return $request;
    }

    public function show($id)
    {
        $habitacion = habitaciones::find($id);
        return $habitacion;
    }


    public function update(Request $request, $id)
    {

        $request->validate([
            
            'estado'=> 'required',
            'configuracion'=> 'required',
            'hotel'=> 'required'

        ]);
      
        $habitacion = habitaciones::find($id);

        if (!$habitacion) {
            return response()->json([
                'message' => 'Estado no encontrado'
            ], 404);
        }

        $habitacion->id = $request->id;
        $habitacion->nombre = $request->nombre;
        $habitacion->hotel = $request->hotel;
        $habitacion->estado = $request->estado;
        $habitacion->configuracion = $request->configuracion;
        $habitacion->created_at = $request->created_at;
        $habitacion->updated_at = $request->updated_at;
        $habitacion->save();

        return response()->json([
            'message' => 'acomodacion actualizado exitosamente',
            'acomodacion' => $habitacion
        ], 200);
    }



    public function destroy($id)
    {
        $habitacion = habitaciones::destroy($id);
        return $habitacion;
    }
   
 
}
