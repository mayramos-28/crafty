<?php

use App\Http\Controllers\AddressesController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartShoppingController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\FileProductController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\PaymentTypesController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SellerController;
use App\Http\Controllers\SellerWithDrawalAccountController;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\UserController;
use App\Models\OrderType;
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
    // Route::get('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/user', [AuthController::class, 'getUser'])->middleware('auth:sanctum');
});
Route::group(['prefix' => 'user'], function () {
    Route::put('/update/{id}', [UserController::class, 'update']);
})->middleware('auth:sanctum');


Route::group(['prefix' => 'seller'], function () {
    Route::get('/index', [SellerController::class, 'index']);
    Route::get('/show/{id}', [SellerController::class, 'show']);
    Route::post('/store', [SellerController::class, 'store']);
    Route::put('/update/{id}', [SellerController::class, 'update']);
    Route::delete('/destroy/{id}', [SellerController::class, 'destroy']);
})->middleware('auth:sanctum');

Route::group(['prefix' => 'product'], function () {
    Route::get('/index', [ProductController::class, 'index']);
    Route::get('/show/{id}', [ProductController::class, 'show']);
    Route::post('/store', [ProductController::class, 'store'])->middleware('auth:sanctum');
    Route::put('/update/{id}', [ProductController::class, 'update'])->middleware('auth:sanctum');
    Route::delete('/destroy/{id}', [ProductController::class, 'destroy'])->middleware('auth:sanctum');
});

Route::group(['prefix' => 'category'], function () {
    Route::get('/index', [CategoryController::class, 'index']);
    Route::get('/show/{id}', [CategoryController::class, 'show']);
});

Route::group(['prefix' => 'file'], function () {
    Route::get('/index', [FileController::class, 'index']);
    Route::get('/show/{id}', [FileController::class, 'show']);
    Route::get('/print/{id}', [FileController::class, 'print']);
    Route::post('/store', [FileController::class, 'store']);
    Route::put('/update/{id}', [FileController::class, 'update'])->middleware('auth:sanctum');
    Route::delete('/destroy/{id}', [FileController::class, 'destroy'])->middleware('auth:sanctum');
});

Route::group(['prefix' => 'address'], function () {
    Route::get('/index', [AddressesController::class, 'index']);
    Route::get('/show/{id}', [AddressesController::class, 'show']);
    Route::post('/store', [AddressesController::class, 'store']);
    Route::put('/update/{id}', [AddressesController::class, 'update']);
    Route::delete('/destroy/{id}', [AddressesController::class, 'destroy']);
})->middleware('auth:sanctum');
Route::group(['prefix' => 'payments-type'], function () {
    Route::get('/index', [PaymentTypesController::class, 'index']);
    Route::get('/show/{id}', [PaymentTypesController::class, 'show']);
    Route::post('/store', [PaymentTypesController::class, 'store']);
    Route::put('/update/{id}', [PaymentTypesController::class, 'update']);
    Route::delete('/destroy/{id}', [PaymentTypesController::class, 'destroy']);
})->middleware('auth:sanctum');

Route::group(['prefix' => 'seller-with-drawal-account'], function () {
    Route::get('/index', [SellerWithDrawalAccountController::class, 'index']);
    Route::get('/show/{id}', [SellerWithDrawalAccountController::class, 'show']);
    Route::post('/store', [SellerWithDrawalAccountController::class, 'store']);
    Route::put('/update/{id}', [SellerWithDrawalAccountController::class, 'update']);
    Route::delete('/destroy/{id}', [SellerWithDrawalAccountController::class, 'destroy']);
})->middleware('auth:sanctum');

Route::group(['prefix' => 'order'], function () {
    Route::get('/index', [OrdersController::class, 'index']);
    Route::get('/show/{id}', [OrdersController::class, 'show']);
    Route::post('/store', [OrdersController::class, 'store']);  
    Route::put('/update/{id}', [OrdersController::class, 'update']);
    Route::put('/updateState/{id}', [OrdersController::class, 'update']);
})->middleware('auth:sanctum');


Route::group(['prefix' => 'shopping-cart'], function () {
    Route::get('/index', [CartShoppingController::class, 'index']);
    Route::post('/store', [CartShoppingController::class, 'store']);
    Route::put('/update', [CartShoppingController::class, 'update']);
})->middleware('auth:sanctum');


Route::group(['prefix' => 'stripe'], function () {
    Route::post('/payment', [StripeController::class, 'createPayment']);
    Route::post('/payment/process', [StripeController::class, 'process']);
})->middleware('auth:sanctum');
