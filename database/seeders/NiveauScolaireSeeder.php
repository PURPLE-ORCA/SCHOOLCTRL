<?php

namespace Database\Seeders;

use App\Models\NiveauScolaire;
use App\Models\TypeEtude;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NiveauScolaireSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $genId = TypeEtude::where('libelle_etude', 'Général')->firstOrFail()->id_etudes;
        $techId = TypeEtude::where('libelle_etude', 'Technique')->firstOrFail()->id_etudes;

        NiveauScolaire::create(['libelle_niveau' => 'Tronc Commun Sci', 'id_etudes' => $genId]);
        NiveauScolaire::create(['libelle_niveau' => '1ère Bac Sci Exp', 'id_etudes' => $genId]);
        NiveauScolaire::create(['libelle_niveau' => '2ème Bac SVT', 'id_etudes' => $genId]);
        NiveauScolaire::create(['libelle_niveau' => '2ème Bac PC', 'id_etudes' => $genId]);

        NiveauScolaire::create(['libelle_niveau' => 'Tronc Commun Tech', 'id_etudes' => $techId]);
        NiveauScolaire::create(['libelle_niveau' => '2ème Bac Elec', 'id_etudes' => $techId]);
    }
}
