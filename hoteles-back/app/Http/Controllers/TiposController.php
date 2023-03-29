<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tipos;

class TiposController extends Controller
{
  
    public function index()
    {
        

        $configuracion = tipos::with('estados')->get();
      
        return response()->json($configuracion);
    }



    public function store(Request $request)
    {
        $request->validate([

            'nombre' => 'required',
            'estado'=> 'required'

        ]);

        $tipo = new tipos();
        $tipo->nombre = $request->nombre;
        $tipo->estado = $request->estado;
        $tipo->save();
        return $request;
    }

    public function show($id)
    {
        $tipo = tipos::with('estados')->get()->find($id);
        return $tipo;
    }


    public function update(Request $request, $id)
    {

        $request->validate([

            'nombre' => 'required',
            'estado'=> 'required'

        ]);

        $tipo = tipos::find($id);

        if (!$tipo) {
            return response()->json([
                'message' => 'Estado no encontrado'
            ], 404);
        }

        $tipo->id = $request->id;
        $tipo->nombre = $request->nombre;
        $tipo->estado = $request->estado;
        
        $tipo->created_at = $request->created_at;
        $tipo->updated_at = $request->updated_at;
        $tipo->save();

        return response()->json([
            'message' => 'acomodacion actualizado exitosamente',
            'acomodacion' => $tipo
        ], 200);
    }



    public function destroy($id)
    {
        $tipo = tipos::destroy($id);
        return $tipo;
    }
}
