<?php

use Illuminate\Support\Facades\Route; use App\Models\User; use Illuminate\Support\Facades\Hash;

/ --- Route d'accueil --- / Route::get('/', function () { return view('welcome'); });

/ --- Route de configuration finale pour BENI AINGAR --- / Route::get('/final-setup', function () { try { // On cherche l'ancien compte test ou l'actuel pour le mettre à jour $user = User::where('email', 'test@test.com')->first() ?: User::where('email', 'beaingar0@gmail.com')->first();

});
