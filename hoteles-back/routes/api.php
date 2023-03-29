<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EstadosController;
use App\Http\Controllers\AcomodacionesController;
use App\Http\Controllers\TiposController;
use App\Http\Controllers\HotelesController;
use App\Http\Controllers\ConfiguracionesController;
use App\Http\Controllers\HabitacionesController;






Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


route::controller(EstadosController::class)->group(function() {

    route::get('/estados', 'index' );
    route::post('/estado', 'store' );
    route::get('/estado/{id}', 'show' );
    route::put('/estado/{id}', 'update' );
    route::delete('/estado/{id}', 'destroy' );

});

route::controller(AcomodacionesController::class)->group(function() {

    route::get('/acomodaciones', 'index' );
    route::post('/acomodacion', 'store' );
    route::get('/acomodacion/{id}', 'show' );
    route::put('/acomodacion/{id}', 'update' );
    route::delete('/acomodacion/{id}', 'destroy' );

});

route::controller(TiposController::class)->group(function() {

    route::get('/tipos', 'index' );
    route::post('/tipo', 'store' );
    route::get('/tipo/{id}', 'show' );
    route::put('/tipo/{id}', 'update' );
    route::delete('/tipo/{id}', 'destroy' );

});

route::controller(HotelesController::class)->group(function() {

    route::get('/hoteles', 'index' );
    route::post('/hotel', 'store' );
    route::get('/hotel/{id}', 'show' );
    route::put('/hotel/{id}', 'update' );
    route::delete('/hotel/{id}', 'destroy' );

});

route::controller(ConfiguracionesController::class)->group(function() {

    route::get('/configuraciones', 'index' );
    route::post('/configuracion', 'store' );
    route::get('/configuracion/{id}', 'show' );
    route::put('/configuracion/{id}', 'update' );
    route::delete('/configuracion/{id}', 'destroy' );

});

route::controller(HabitacionesController::class)->group(function() {

    route::get('/habitaciones', 'index' );
    route::post('/habitacion', 'store' );
    route::get('/habitacion/{id}', 'show' );
    route::put('/habitacion/{id}', 'update' );
    route::delete('/habitacion/{id}', 'destroy' );

});

