<?php

use Illuminate\Support\Facades\Route; use App\Models\User; use Illuminate\Support\Facades\Hash;

Route::get('/', function () { return view('welcome'); });

Route::get('/create-admin', function () { User::create([ 'name' => 'Admin', 'email' => 'admin@raps.com', 'password' => Hash::make('Admin123!'), ]); return "Compte cree avec succes ! Utilisez admin@raps.com et Admin123!"; });