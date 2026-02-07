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
        Schema::create('actualites', function (Blueprint $table) {
            $table->id();
            $table->string('titre'); // Ex: "Défense des droits des femmes"
            $table->string('image'); // Le chemin vers le fichier stocké
            $table->date('date_publication'); // Date d'affichage sur le site
            $table->text('contenu'); // Texte complet (Rich Text) pour la page détail
            $table->timestamps(); // Gère created_at et updated_at automatiquement
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actualites');
    }
};
