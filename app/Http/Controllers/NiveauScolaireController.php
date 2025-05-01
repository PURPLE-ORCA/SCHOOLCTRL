<?php

namespace App\Http\Controllers;

use App\Models\NiveauScolaire;
use App\Models\TypeEtude;
use Illuminate\Http\Request; // Use FormRequest later
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class NiveauScolaireController extends Controller
{
    public function index()
    {
        return Inertia::render('Niveaux/Index', [
            'niveaux' => NiveauScolaire::with('typeEtude')->paginate(10)->withQueryString(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Niveaux/Form', [
            'etudes' => TypeEtude::all(['id_etudes', 'libelle_etude']), 
            'niveau' => null,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'libelle_niveau' => 'required|string|max:255|unique:niveau_scolaires,libelle_niveau',
            'id_etudes' => 'required|exists:type_etudes,id_etudes',

        ]);
        NiveauScolaire::create($validated);
        return Redirect::route('niveaux.index')->with('success', 'Niveau créé.');
    }

    public function edit(NiveauScolaire $niveau)
    {
         $niveau->load('typeEtude');

        return Inertia::render('Niveaux/Form', [
            'niveau' => $niveau, // Pass the correctly bound model
            'etudes' => TypeEtude::all(['id_etudes', 'libelle_etude']),
        ]);
    }

    public function update(Request $request, NiveauScolaire $niveau)
    {
        // $niveau = $niveaux; // Remove this unnecessary line
        $validated = $request->validate([
            // Use the correctly bound $niveau variable directly
            'libelle_niveau' => 'required|string|max:255|unique:niveau_scolaires,libelle_niveau,' . $niveau->id_niveau.',id_niveau',
            'id_etudes' => 'required|exists:type_etudes,id_etudes',
        ]);
        $niveau->update($validated);
        return Redirect::route('niveaux.index')->with('success', 'Niveau mis à jour.');
    }
    public function destroy(NiveauScolaire $niveau)
    {
        $niveau->delete(); // Use the correctly bound model
        return Redirect::route('niveaux.index')->with('success', 'Niveau supprimé.');
    }
}