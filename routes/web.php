<?php

use Illuminate\Support\Facades\Route; use App\Models\User; use Illuminate\Support\Facades\Hash;

Route::get('/', function () { return view('welcome'); });

Route::get('/final-setup', function () { try { $user = User::where('email', 'test@test.com')->first() ?: User::where('email', 'beaingar0@gmail.com')->first(); if ($user) { $user->update([ 'name' => 'BENI AINGAR', 'email' => 'beaingar0@gmail.com', 'password' => Hash::make('11Beni@1994.'), ]); return "Compte de BENI AINGAR mis a jour !"; } else { User::create([ 'name' => 'BENI AINGAR', 'email' => 'beaingar0@gmail.com', 'password' => Hash::make('11Beni@1994.'), ]); return "Compte de BENI AINGAR cree !"; } } catch (\Exception $e) { return "Erreur : " . $e->getMessage(); } });
