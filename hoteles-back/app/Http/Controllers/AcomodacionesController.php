<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\acomodaciones;

class AcomodacionesController extends Controller
{

    public function index()
    {
        $acomodaciones = acomodaciones::with('estados')->get();
        return response()->json($acomodaciones);
    }



    public function store(Request $request)
    {
        $request->validate([

            'nombre' => 'required',
            'estado'=> 'required'

        ]);

        $acomodacion = new acomodaciones();
        $acomodacion->nombre = $request->nombre;
        $acomodacion->estado = $request->estado;
        $acomodacion->save();
        return $request;
    }

    public function show($id)
    {
        $acomodacion = acomodaciones::with('estados')->get()->find($id);
        return $acomodacion;
    }


    public function update(Request $request, $id)
    {

        $request->validate([

            'nombre' => 'required',
            'estado'=> 'required'

        ]);

        $acomodacion = acomodaciones::find($id);

        if (!$acomodacion) {
            return response()->json([
                'message' => 'Estado no encontrado'
            ], 404);
        }

        $acomodacion->id = $request->id;
        $acomodacion->nombre = $request->nombre;
        $acomodacion->estado = $request->estado;
        
        $acomodacion->created_at = $request->created_at;
        $acomodacion->updated_at = $request->updated_at;
        $acomodacion->save();

        return response()->json([
            'message' => 'acomodacion actualizado exitosamente',
            'acomodacion' => $acomodacion
        ], 200);
    }



    public function destroy($id)
    {
        $acomodacion = acomodaciones::destroy($id);
        return $acomodacion;
    }
}

