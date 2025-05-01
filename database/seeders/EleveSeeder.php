<?php

namespace Database\Seeders;

use App\Models\Eleve;
use App\Models\NiveauScolaire;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EleveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Eleve::create([
            'num_inscription' => 'INS-001',
            'nomAr' => 'العلوي', // Alami
            'prenomAr' => 'أحمد', // Ahmed
            'nomFr' => 'ALAMI',
            'prenomFr' => 'Ahmed',
            'date_naissance' => '2006-05-15',
            'lieu_naissance' => 'Casablanca',
            'code_massar' => 'K123456789',
            'CIN' => 'BK123456',
            'observation' => 'Excellent élément.',
            'id_niveau' => 1, // Assign to 2Bac PC
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        Eleve::create([
            'num_inscription' => 'INS-002',
            'nomAr' => 'فاطمة', // Fatima
            'prenomAr' => 'الزهراء', // Zahra
            'nomFr' => 'FATIMA',
            'prenomFr' => 'Zahra',
            'date_naissance' => '2007-01-20',
            'lieu_naissance' => 'Rabat',
            'code_massar' => 'L987654321',
            'CIN' => null, // No CIN maybe
            'observation' => null,
            'id_niveau' => 2, // Assign to 1Bac Sci
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        Eleve::create([
            'num_inscription' => 'INS-003',
            'nomAr' => 'الإدريسي', // Idrissi
            'prenomAr' => 'يوسف', // Youssef
            'nomFr' => 'IDRISSI',
            'prenomFr' => 'Youssef',
            'date_naissance' => '2006-11-02',
            'lieu_naissance' => 'Marrakech',
            'code_massar' => 'M112233445',
            'CIN' => 'BJ987654',
            'observation' => 'Needs improvement in Physics.',
            'id_niveau' => 1, // Assign to 2Bac SVT
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
