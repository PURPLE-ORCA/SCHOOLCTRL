<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Eleve extends Model
{
    use HasFactory;

    protected $fillable = [
        'num_inscription',
        'nomAr',
        'prenomAr',
        'nomFr',
        'prenomFr',
        'date_naissance',
        'lieu_naissance',
        'annee_archive',
        'date_quitter_etablissement',
        'code_massar',
        'CIN',
        'observation',
        'id_niveau',
    ];

    protected $casts = [
        'date_naissance' => 'date',
        'date_quitter_etablissement' => 'date',
    ];

    public function niveauScolaire(): BelongsTo
    {
        return $this->belongsTo(NiveauScolaire::class, 'id_niveau');
    }
}