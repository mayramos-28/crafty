<?php

use App\Http\Controllers\AddressesController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\FileProductController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
//  });

Route::group(['prefix' => 'auth'], function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/user', [AuthController::class, 'getUser'])->middleware('auth:sanctum');
});

Route::group(['prefix'=> 'product'], function(){
    Route::get('/index', [ProductController::class, 'index']);
    Route::get('/show/{id}', [ProductController::class, 'show']);
    Route::post('/store', [ProductController::class, 'store']);
    Route::put('/update/{id}', [ProductController::class, 'update']);
    Route::delete('/delete/{id}', [ProductController::class, 'destroy']);
});

Route::group(['prefix'=> 'category'], function(){
    Route::get('/index', [CategoryController::class, 'index']);
    Route::get('/show/{id}', [CategoryController::class, 'show']);
    Route::post('/store', [CategoryControllerer::class, 'store']);
    Route::put('/update/{id}', [CategoryController::class, 'update']);
    Route::delete('/delete/{id}', [CategoryController::class, 'destroy']);
});

Route::group(['prefix' => 'file'], function () {
    Route::get('/index', [FileController::class, 'index']);
    Route::get('/show/{id}', [FileController::class, 'show']);
    Route::get('/print/{id}', [FileController::class, 'print']);
    Route::post('/store', [FileController::class, 'store']);
});

Route::group(['prefix' => 'address'], function () {
    Route::get('/index', [AddressesController::class, 'index']);
    Route::get('/show/{id}', [AddressesController::class, 'show']);
    Route::post('/store', [AddressesController::class, 'store']);
    Route::delete('/delete/{id}', [AddressesController::class, 'destroy']);
});