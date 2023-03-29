<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\estados;



class EstadosController extends Controller
{

    public function index()
    {
        $estado = estados::all();
        return $estado;
    }



    public function store(Request $request)
    {

        $estado = new estados();
        $estado->nombre = $request->nombre;
        $estado->save();
        return $request;
    }

    public function show($id)
    {
        $estado = estados::find($id);
        return $estado;
    }


    public function update(Request $request, $id)
    {

        $request->validate([

            'nombre' => 'required',

        ]);

        $estado = Estados::find($id);

        if (!$estado) {
            return response()->json([
                'message' => 'Estado no encontrado'
            ], 404);
        }

        $estado->id = $request->id;
        $estado->nombre = $request->nombre;
        $estado->created_at = $request->created_at;
        $estado->updated_at = $request->updated_at;
        $estado->save();

        return response()->json([
            'message' => 'Estado actualizado exitosamente',
            'estado' => $estado
        ], 200);
    }



    public function destroy($id)
    {
        $estado = estados::destroy($id);
        return $estado;
    }
}
