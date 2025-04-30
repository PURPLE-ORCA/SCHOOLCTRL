<?php

namespace Database\Seeders;

use App\Models\TypeEtude;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypeEtudeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TypeEtude::create(['libelle_etude' => 'Général']);
        TypeEtude::create(['libelle_etude' => 'Technique']);
    }
}
