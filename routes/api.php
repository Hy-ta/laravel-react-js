<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'project',
    'namespace' => 'Project',
], function($router) {
    Route::get('idnex', [ProjectController::class, 'index']);
    Route::post('store', [ProjectController::class, 'store']);
    Route::get('showAll', [ProjectController::class, 'showAll']);
    // Route::put('/{id}', 'ProjectController@markAsCompleted'); 
});

// Route::group([
//     // 'middleware' => 'api',
//     'prefix' => 'task',
//     'namespace' => 'Task',
// ], function($router) {
//     Route::post('store', 'TaskController@store');
//     Route::put('markAsCompleted', 'TaskController@markAsCompleted');    
// });



    // Route::middleware('auth:api')->get('/user', function (Request $request) {
    //     return $request->user();
    // });
