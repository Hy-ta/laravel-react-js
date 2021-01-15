<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;

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
    Route::get('index', [ProjectController::class, 'index']);
    Route::get('getSearch', [ProjectController::class, 'getSearch']);
    Route::post('store', [ProjectController::class, 'store']);
    Route::get('fetchProjects', [ProjectController::class, 'fetchProjects']);
    Route::get('{id}', [ProjectController::class, 'show']);
    Route::put('{project}', [ProjectController::class, 'markAsCompleted']);
});

// User authentication
Route::group([
    'middleware' => 'api',
    'prefix' => 'user',
    'namespace' => 'User',
], function($router) {
    Route::post('userSignUp', [UserController::class, 'userSignUp']);
    Route::post('userLogin', [UserController::class, 'userLogin']);
    // Route::post('userLogout', [UserController::class, 'userLogout']);    
    Route::get('userDetails', [UserController::class, 'userDetails']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'task',
    'namespace' => 'Task',
], function($router) {
    Route::post('store', [TaskController::class, 'store']);
    Route::put('{task}', [TaskController::class,'markAsCompleted']); 
});


