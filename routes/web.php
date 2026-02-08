<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use Illuminate\Support\Facades\Artisan;

Route::get('/init-db', function () { try { Artisan::call('migrate:fresh', ['--force' => true]); return "Base de données initialisée avec succès !"; } catch (\Exception $e) { return "Erreur lors de la migration : " . $e->getMessage(); } })
