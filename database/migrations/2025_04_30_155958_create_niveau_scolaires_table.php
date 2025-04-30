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
        Schema::create('niveau_scolaires', function (Blueprint $table) {
            $table->id('id_niveau');
            $table->string('libelle_niveau');
            $table->foreignId('id_etudes')->constrained('type_etudes', 'id_etudes')->cascadeOnDelete(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('niveau_scolaires');
    }
};
