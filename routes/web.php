<?php

use Illuminate\Support\Facades\Route; use Illuminate\Support\Facades\DB; use Illuminate\Support\Facades\Hash;

Route::get('/', function () { return view('welcome'); });

Route::get('/force-admin', function () { DB::table('users')->insert([ 'name' => 'Admin Test', 'email' => 'test@test.com', 'password' => Hash::make('12345678'), 'created_at' => now(), 'updated_at' => now(), ]); return "Utilisateur cree ! Testez avec test@test.com et 12345678"; });