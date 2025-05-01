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
        Eleve::create([
            'num_inscription' => 'INS-004',
            'nomAr' => 'التازي',
            'prenomAr' => 'مريم',
            'nomFr' => 'TAZI',
            'prenomFr' => 'Mariam',
            'date_naissance' => '2007-03-10',
            'lieu_naissance' => 'Fes',
            'code_massar' => 'F556677889',
            'CIN' => 'CD112233',
            'observation' => null,
            'id_niveau' => 2, // 1ère Bac Sci Exp
            'created_at' => now(), 'updated_at' => now(),
        ]);

        Eleve::create([
            'num_inscription' => 'INS-005',
            'nomAr' => 'بناني',
            'prenomAr' => 'علي',
            'nomFr' => 'BENNANI',
            'prenomFr' => 'Ali',
            'date_naissance' => '2006-08-25',
            'lieu_naissance' => 'Tanger',
            'code_massar' => 'T998877665',
            'CIN' => null,
            'observation' => 'Participates well in class.',
            'id_niveau' => 4, // 2ème Bac PC
            'created_at' => now(), 'updated_at' => now(),
        ]);

         Eleve::create([
            'num_inscription' => null, // Optional inscription number
            'nomAr' => 'الركراكي',
            'prenomAr' => 'خديجة',
            'nomFr' => 'REGRAGUI',
            'prenomFr' => 'Khadija',
            'date_naissance' => '2006-12-01',
            'lieu_naissance' => 'Agadir',
            'code_massar' => 'A100000001',
            'CIN' => 'SH445566',
            'observation' => null,
            'id_niveau' => 3, // 2ème Bac SVT
            'created_at' => now(), 'updated_at' => now(),
        ]);

         Eleve::create([
            'num_inscription' => 'INS-007',
            'nomAr' => 'الوزاني',
            'prenomAr' => 'سمير',
            'nomFr' => 'OUAZZANI',
            'prenomFr' => 'Samir',
            'date_naissance' => '2008-02-14',
            'lieu_naissance' => 'Meknes',
            'code_massar' => 'K200000002',
            'CIN' => null,
            'observation' => null,
            'id_niveau' => 1, // Tronc Commun Sci
            'created_at' => now(), 'updated_at' => now(),
        ]);

         Eleve::create([
            'num_inscription' => 'INS-008',
            'nomAr' => 'جبلي',
            'prenomAr' => 'سارة',
            'nomFr' => 'JEBLI',
            'prenomFr' => 'Sara',
            'date_naissance' => '2007-09-30',
            'lieu_naissance' => 'Casablanca',
            'code_massar' => 'C300000003',
            'CIN' => 'BE778899',
            'observation' => 'Frequently absent.',
            'id_niveau' => 2, // 1ère Bac Sci Exp
            'created_at' => now(), 'updated_at' => now(),
        ]);

         Eleve::create([
            'num_inscription' => 'INS-009',
            'nomAr' => 'فيلالي',
            'prenomAr' => 'رشيد',
            'nomFr' => 'FILALI',
            'prenomFr' => 'Rachid',
            'date_naissance' => '2006-04-05',
            'lieu_naissance' => 'Rabat',
            'code_massar' => 'R400000004',
            'CIN' => 'AB123123',
            'observation' => null,
            'id_niveau' => 6, // Assuming ID 6 = 2ème Bac Elec
            'created_at' => now(), 'updated_at' => now(),
        ]);

         Eleve::create([
            'num_inscription' => 'INS-010',
            'nomAr' => 'السعدي',
            'prenomAr' => 'ليلى',
            'nomFr' => 'SAADI',
            'prenomFr' => 'Laila',
            'date_naissance' => '2008-07-19',
            'lieu_naissance' => 'Marrakech',
            'code_massar' => 'M500000005',
            'CIN' => null,
            'observation' => 'Good potential.',
            'id_niveau' => 5, // Assuming ID 5 = Tronc Commun Tech
            'created_at' => now(), 'updated_at' => now(),
        ]);

        Eleve::create(['num_inscription' => 'INS-011', 'nomAr' => 'المزوري', 'prenomAr' => 'عمر', 'nomFr' => 'MEZOUARI', 'prenomFr' => 'Omar', 'date_naissance' => '2007-11-11', 'lieu_naissance' => 'Fes', 'code_massar' => 'F600000006', 'CIN' => 'FG456456', 'observation' => null, 'id_niveau' => 1, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-012', 'nomAr' => 'القادري', 'prenomAr' => 'نادية', 'nomFr' => 'KADIRI', 'prenomFr' => 'Nadia', 'date_naissance' => '2006-01-01', 'lieu_naissance' => 'Tanger', 'code_massar' => 'T700000007', 'CIN' => null, 'observation' => null, 'id_niveau' => 3, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-013', 'nomAr' => 'الشرايبي', 'prenomAr' => 'ياسين', 'nomFr' => 'CHRAIBI', 'prenomFr' => 'Yassine', 'date_naissance' => '2007-06-06', 'lieu_naissance' => 'Agadir', 'code_massar' => 'A800000008', 'CIN' => 'QW123789', 'observation' => 'Very motivated.', 'id_niveau' => 4, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-014', 'nomAr' => 'الزروالي', 'prenomAr' => 'سلمى', 'nomFr' => 'ZEROUALI', 'prenomFr' => 'Salma', 'date_naissance' => '2008-04-04', 'lieu_naissance' => 'Meknes', 'code_massar' => 'K900000009', 'CIN' => null, 'observation' => null, 'id_niveau' => 1, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-015', 'nomAr' => 'المرابط', 'prenomAr' => 'هشام', 'nomFr' => 'MRABET', 'prenomFr' => 'Hicham', 'date_naissance' => '2006-09-09', 'lieu_naissance' => 'Casablanca', 'code_massar' => 'C110000010', 'CIN' => 'BN789789', 'observation' => null, 'id_niveau' => 6, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-016', 'nomAr' => 'بناصر', 'prenomAr' => 'إيمان', 'nomFr' => 'BENNACEUR', 'prenomFr' => 'Imane', 'date_naissance' => '2007-12-12', 'lieu_naissance' => 'Rabat', 'code_massar' => 'R220000011', 'CIN' => 'BH111222', 'observation' => null, 'id_niveau' => 2, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-017', 'nomAr' => 'الصقلي', 'prenomAr' => 'مهدي', 'nomFr' => 'SEKKALI', 'prenomFr' => 'Mehdi', 'date_naissance' => '2006-07-07', 'lieu_naissance' => 'Marrakech', 'code_massar' => 'M330000012', 'CIN' => null, 'observation' => 'Needs extra help.', 'id_niveau' => 3, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-018', 'nomAr' => 'الحداد', 'prenomAr' => 'زينب', 'nomFr' => 'HADDAD', 'prenomFr' => 'Zineb', 'date_naissance' => '2008-10-10', 'lieu_naissance' => 'Fes', 'code_massar' => 'F440000013', 'CIN' => 'UI444555', 'observation' => null, 'id_niveau' => 5, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-019', 'nomAr' => 'المكي', 'prenomAr' => 'طارق', 'nomFr' => 'MEKKI', 'prenomFr' => 'Tariq', 'date_naissance' => '2007-02-02', 'lieu_naissance' => 'Tanger', 'code_massar' => 'T550000014', 'CIN' => null, 'observation' => null, 'id_niveau' => 2, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-020', 'nomAr' => 'الخياط', 'prenomAr' => 'دنيا', 'nomFr' => 'KHAYAT', 'prenomFr' => 'Dounia', 'date_naissance' => '2006-03-03', 'lieu_naissance' => 'Agadir', 'code_massar' => 'A660000015', 'CIN' => 'PO666777', 'observation' => 'Excellent work ethic.', 'id_niveau' => 4, 'created_at' => now(), 'updated_at' => now(),]);

        Eleve::create(['num_inscription' => 'INS-021','nomAr' => 'بوشتى', 'prenomAr' => 'كوثر', 'nomFr' => 'BOUCHTA', 'prenomFr' => 'Kaoutar', 'date_naissance' => '2007-05-08', 'lieu_naissance' => 'Meknes', 'code_massar' => 'K770000016', 'CIN' => null, 'observation' => null, 'id_niveau' => 1, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-022','nomAr' => 'العسري', 'prenomAr' => 'بدر', 'nomFr' => 'ASRI', 'prenomFr' => 'Badr', 'date_naissance' => '2006-10-15', 'lieu_naissance' => 'Casablanca', 'code_massar' => 'C880000017', 'CIN' => 'BK888999', 'observation' => null, 'id_niveau' => 6, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-023','nomAr' => 'الزاهي', 'prenomAr' => 'حنان', 'nomFr' => 'ZAHI', 'prenomFr' => 'Hanane', 'date_naissance' => '2007-08-20', 'lieu_naissance' => 'Rabat', 'code_massar' => 'R990000018', 'CIN' => null, 'observation' => 'Shows promise.', 'id_niveau' => 3, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => null,'nomAr' => 'حمدي', 'prenomAr' => 'زكرياء', 'nomFr' => 'HAMDI', 'prenomFr' => 'Zakaria', 'date_naissance' => '2006-02-28', 'lieu_naissance' => 'Marrakech', 'code_massar' => 'M101000019', 'CIN' => 'BJ101010', 'observation' => null, 'id_niveau' => 4, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-025','nomAr' => 'التلمساني', 'prenomAr' => 'نهيلة', 'nomFr' => 'TLEMSANI', 'prenomFr' => 'Nouhaila', 'date_naissance' => '2008-01-25', 'lieu_naissance' => 'Fes', 'code_massar' => 'F121000020', 'CIN' => null, 'observation' => null, 'id_niveau' => 5, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-026','nomAr' => 'بوزيد', 'prenomAr' => 'جواد', 'nomFr' => 'BOUZID', 'prenomFr' => 'Jaouad', 'date_naissance' => '2007-04-18', 'lieu_naissance' => 'Tanger', 'code_massar' => 'T131000021', 'CIN' => 'AZERTY12', 'observation' => null, 'id_niveau' => 2, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-027','nomAr' => 'العمري', 'prenomAr' => 'آسية', 'nomFr' => 'AMRI', 'prenomFr' => 'Assia', 'date_naissance' => '2006-06-22', 'lieu_naissance' => 'Agadir', 'code_massar' => 'A141000022', 'CIN' => null, 'observation' => 'Quiet but diligent.', 'id_niveau' => 3, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-028','nomAr' => 'المنصوري', 'prenomAr' => 'إسماعيل', 'nomFr' => 'MANSOURI', 'prenomFr' => 'Ismail', 'date_naissance' => '2007-10-01', 'lieu_naissance' => 'Meknes', 'code_massar' => 'K151000023', 'CIN' => 'MK456789', 'observation' => null, 'id_niveau' => 1, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-029','nomAr' => 'الداودي', 'prenomAr' => 'هاجر', 'nomFr' => 'DAOUDI', 'prenomFr' => 'Hajar', 'date_naissance' => '2006-08-08', 'lieu_naissance' => 'Casablanca', 'code_massar' => 'C161000024', 'CIN' => null, 'observation' => null, 'id_niveau' => 4, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-030','nomAr' => 'العمراوي', 'prenomAr' => 'أيمن', 'nomFr' => 'AMRAOUI', 'prenomFr' => 'Aymane', 'date_naissance' => '2007-07-07', 'lieu_naissance' => 'Rabat', 'code_massar' => 'R171000025', 'CIN' => 'RA171717', 'observation' => 'Transfer student.', 'id_niveau' => 6, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-031','nomAr' => 'برادة', 'prenomAr' => 'لبنى', 'nomFr' => 'BERRADA', 'prenomFr' => 'Loubna', 'date_naissance' => '2008-03-15', 'lieu_naissance' => 'Marrakech', 'code_massar' => 'M181000026', 'CIN' => null, 'observation' => null, 'id_niveau' => 5, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-032','nomAr' => 'الصنهاجي', 'prenomAr' => 'عثمان', 'nomFr' => 'SENHAJI', 'prenomFr' => 'Othmane', 'date_naissance' => '2006-05-20', 'lieu_naissance' => 'Fes', 'code_massar' => 'F191000027', 'CIN' => 'FS191919', 'observation' => null, 'id_niveau' => 3, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-033','nomAr' => 'العربي', 'prenomAr' => 'أميمة', 'nomFr' => 'LARBI', 'prenomFr' => 'Oumaima', 'date_naissance' => '2007-09-05', 'lieu_naissance' => 'Tanger', 'code_massar' => 'T201000028', 'CIN' => null, 'observation' => null, 'id_niveau' => 2, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-034','nomAr' => 'بوزيان', 'prenomAr' => 'محمد أمين', 'nomFr' => 'BOUZIANE', 'prenomFr' => 'Mohamed Amine', 'date_naissance' => '2008-06-10', 'lieu_naissance' => 'Agadir', 'code_massar' => 'A211000029', 'CIN' => 'AG212121', 'observation' => null, 'id_niveau' => 1, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-035','nomAr' => 'القاسمي', 'prenomAr' => 'شيماء', 'nomFr' => 'KASMI', 'prenomFr' => 'Chaimae', 'date_naissance' => '2006-11-25', 'lieu_naissance' => 'Meknes', 'code_massar' => 'K221000030', 'CIN' => null, 'observation' => 'Artistic talent.', 'id_niveau' => 4, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-036','nomAr' => 'السملالي', 'prenomAr' => 'حمزة', 'nomFr' => 'SEMLALI', 'prenomFr' => 'Hamza', 'date_naissance' => '2007-01-30', 'lieu_naissance' => 'Casablanca', 'code_massar' => 'C231000031', 'CIN' => 'CS232323', 'observation' => null, 'id_niveau' => 6, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-037','nomAr' => 'الزناتي', 'prenomAr' => 'سكينة', 'nomFr' => 'ZANNATI', 'prenomFr' => 'Soukaina', 'date_naissance' => '2008-08-18', 'lieu_naissance' => 'Rabat', 'code_massar' => 'R241000032', 'CIN' => null, 'observation' => null, 'id_niveau' => 5, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-038','nomAr' => 'النجاري', 'prenomAr' => 'معاذ', 'nomFr' => 'NAJJARI', 'prenomFr' => 'Mouad', 'date_naissance' => '2006-10-02', 'lieu_naissance' => 'Marrakech', 'code_massar' => 'M251000033', 'CIN' => 'MR252525', 'observation' => null, 'id_niveau' => 3, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-039','nomAr' => 'الودغيري', 'prenomAr' => 'وئام', 'nomFr' => 'OUDRHIRI', 'prenomFr' => 'Wiam', 'date_naissance' => '2007-12-24', 'lieu_naissance' => 'Fes', 'code_massar' => 'F261000034', 'CIN' => null, 'observation' => null, 'id_niveau' => 2, 'created_at' => now(), 'updated_at' => now(),]);
        Eleve::create(['num_inscription' => 'INS-040','nomAr' => 'البوعزاوي', 'prenomAr' => 'مروان', 'nomFr' => 'BOUAZZAOUI', 'prenomFr' => 'Marwane', 'date_naissance' => '2008-05-05', 'lieu_naissance' => 'Tanger', 'code_massar' => 'T271000035', 'CIN' => 'TN272727', 'observation' => null, 'id_niveau' => 1, 'created_at' => now(), 'updated_at' => now(),]);
        }
}
