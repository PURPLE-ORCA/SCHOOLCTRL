<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EleveController;
use App\Http\Controllers\NiveauScolaireController;
use App\Http\Controllers\TypeEtudeController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::resource('eleves', EleveController::class)->middleware(['auth', 'verified']);
Route::resource('niveaux', NiveauScolaireController::class)->middleware(['auth', 'verified']);
Route::resource('etudes', TypeEtudeController::class)->middleware(['auth', 'verified']);


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
