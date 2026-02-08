<?php

use Illuminate\Support\Facades\Route; use Illuminate\Support\Facades\Artisan;

Route::get('/', function () { return view('welcome'); });

Route::get('/init-db', function () { try { Artisan::call('migrate:fresh', ['--force' => true]); return "Base de données initialisée avec succès !"; } catch (\Exception $e) { return "Erreur : " . $e->getMessage(); } });