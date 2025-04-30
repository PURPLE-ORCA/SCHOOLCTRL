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
        Schema::create('eleves', function (Blueprint $table) {
            $table->id();
            $table->string('num_inscription')->nullable();
            $table->string('nomAr');
            $table->string('prenomAr');
            $table->string('nomFr');
            $table->string('prenomFr');
            $table->date('date_naissance');
            $table->string('lieu_naissance');
            $table->string('annee_archive')->nullable();
            $table->date('date_quitter_etablissement')->nullable();
            $table->string('code_massar')->unique();
            $table->string('CIN')->nullable()->unique();
            $table->text('observation')->nullable();
            $table->foreignId('id_niveau') 
                  ->constrained('niveau_scolaires', 'id_niveau')
                  ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('eleves');
    }
};
