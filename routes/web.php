<?php

use App\Http\Controllers\GuestController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [GuestController::class, 'index']);
Route::get('/info', [GuestController::class, 'info'])->name('info');
Route::get('/infection', [GuestController::class, 'infection'])->name('infection');
Route::get('/examples', [GuestController::class, 'examples'])->name('examples');
Route::get('/manifest', [GuestController::class, 'manifest'])->name('manifest');
Route::get('/ingress', [GuestController::class, 'ingress'])->name('ingress');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
