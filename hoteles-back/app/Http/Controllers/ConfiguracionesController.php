<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\configuraciones;
use App\Models\tipos;
use App\Models\acomodaciones;



class ConfiguracionesController extends Controller
{

    public function index()
    {

        $configuracion = configuraciones::with('estados')->with('tipos')->with('acomodaciones')->get();
        return response()->json($configuracion);
    }



    public function store(Request $request)
    {
        
        $tipos = tipos::find($request->tipos);
        $acomodaciones = acomodaciones::find($request->acomodacion);


        $request->validate([


            'acomodacion' => 'required',
            'tipos' => 'required',
            'estado' => 'required'

        ]);



        $nombre = $tipos->nombre . "-" . $acomodaciones->nombre;
        $configuracion = new configuraciones();
        $configuracion->nombre = $nombre;
        $configuracion->acomodacion = $request->acomodacion;
        $configuracion->tipos = $request->tipos;
        $configuracion->estado = $request->estado;
         $configuracion->save();
        return $request;
    }

    public function show($id)
    {
        $configuracion = configuraciones::with('estados')->with('tipos')->with('acomodaciones')->get()->find($id);
        return $configuracion;
    }


    public function update(Request $request, $id)
    {

        $tipos = tipos::find($request->tipo);
        $acomodaciones = acomodaciones::find($request->acomodacion);

        $configuracion = configuraciones::find($id);

        if (!$configuracion) {
            return response()->json([
                'message' => 'Estado no encontrado'
            ], 404);
        }
        $nombre = $tipos->nombre . "-" . $acomodaciones->nombre;

        
        $configuracion->nombre = $nombre;
        $configuracion->acomodacion = $request->acomodacion;
        $configuracion->tipos = $request->tipo;
        $configuracion->estado = $request->estado;
        $configuracion->save();

        return response()->json([
            'message' => 'acomodacion actualizado exitosamente',
            'acomodacion' => $configuracion
        ], 200);
    }



    public function destroy($id)
    {
        $configuracion = configuraciones::destroy($id);
        return $configuracion;
    }
}
