<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class NiveauScolaire extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_niveau';

    protected $fillable = [
        'libelle_niveau',
        'id_etudes', 
    ];

    public function typeEtude(): BelongsTo
    {
        return $this->belongsTo(TypeEtude::class, 'id_etudes', 'id_etudes');
    }

    // Relationship to Eleve
    public function eleves(): HasMany
    {
        return $this->hasMany(Eleve::class, 'id_niveau', 'id_niveau');
    }
}