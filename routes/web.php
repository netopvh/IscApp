<?php

use App\Http\Controllers\DashboardController;
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

Route::middleware('auth')->group(function(){
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/pre', [DashboardController::class, 'pre'])->name('dashboard.pre');
    Route::get('/dashboard/pre/risk', [DashboardController::class, 'risk'])->name('dashboard.pre.risk');
    Route::get('/dashboard/pre/before', [DashboardController::class, 'before'])->name('dashboard.pre.before');
    Route::get('/dashboard/pre/daily', [DashboardController::class, 'daily'])->name('dashboard.pre.daily');
    
    Route::get('/dashboard/pos', [DashboardController::class, 'pos'])->name('dashboard.pos');
    Route::get('/dashboard/pos/ferida', [DashboardController::class, 'ferida'])->name('dashboard.pos.ferida');
    Route::get('/dashboard/pos/dreno', [DashboardController::class, 'dreno'])->name('dashboard.pos.dreno');
});

require __DIR__ . '/auth.php';
