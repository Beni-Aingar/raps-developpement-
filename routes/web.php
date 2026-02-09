<?php

use Illuminate\Support\Facades\Route;

/ |-------------------------------------------------------------------------- | Web Routes |-------------------------------------------------------------------------- /

Route::get('/', function () { return view('welcome'); });

// Si vous avez d'autres routes (comme Auth::routes()), elles s'ajouteront à la suite.