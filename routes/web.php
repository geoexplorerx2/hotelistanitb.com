<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\sendFormController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::GET('/', [sendFormController::class,'index']);
Route::POST('/contactform/store', [sendFormController::class,'store'])->name('contact.store');
Route::GET('/thank-you', [sendFormController::class,'thanks'])->name('contact.thanks');
