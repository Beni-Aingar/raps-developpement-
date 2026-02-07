<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projets', function (Blueprint $table) {
            $table->id();
            
            // Informations principales
            $table->string('titre'); // Nom du projet
            $table->string('slug')->unique(); // Pour des URLs propres (ex: raps.org/projets/forage-sahel)
            $table->string('categorie'); // Ex: Eau, Éducation, Climat
            
            // Contenu
            $table->text('description_courte')->nullable(); // Résumé pour les cartes
            $table->longText('description_complete'); // Détails complets du projet
            
            // Médias et Statistiques
            $table->string('image')->nullable(); // Photo principale
            $table->integer('objectif_financier')->nullable(); // Si c'est un projet de don
            $table->integer('progression')->default(0); // Pourcentage (0 à 100)
            
            // Statut du projet
            $table->enum('statut', ['en_cours', 'termine', 'planifie'])->default('planifie');
            
            $table->timestamps(); // Créé le : created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projets');
    }
};
