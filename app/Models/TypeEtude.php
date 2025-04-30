<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TypeEtude extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_etudes'; 

    protected $fillable = [
        'libelle_etude',
    ];

    public function niveauScolaires(): HasMany
    {
        return $this->hasMany(NiveauScolaire::class, 'id_etudes', 'id_etudes');
    }
}