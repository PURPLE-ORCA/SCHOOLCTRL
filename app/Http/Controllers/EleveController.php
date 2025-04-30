<?php

namespace App\Http\Controllers;

use App\Models\Eleve;
use App\Models\NiveauScolaire;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class EleveController extends Controller
{
    public function index(Request $request)
    {
        $eleves = Eleve::with('niveauScolaire.typeEtude') 
            ->paginate(15) 
            ->withQueryString(); 
        return Inertia::render('Eleves/Index', [
            'eleves' => $eleves,
        ]);
    }

    public function create()
    {
        return Inertia::render('Eleves/Form', [
            'niveaux' => NiveauScolaire::with('typeEtude')->get()->map(fn($niveau) => [ // Pass levels for dropdown
                'id' => $niveau->id_niveau,
                'label' => $niveau->libelle_niveau . ' (' . ($niveau->typeEtude->libelle_etude ?? 'N/A') . ')',
            ]),
            'eleve' => null,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nomAr' => 'required|string|max:255',
            'prenomAr' => 'required|string|max:255',
            'nomFr' => 'required|string|max:255',
            'prenomFr' => 'required|string|max:255',
            'date_naissance' => 'required|date',
            'lieu_naissance' => 'required|string|max:255',
            'code_massar' => 'required|string|unique:eleves,code_massar|regex:/^[A-Z][0-9]{9}$/i',
            'id_niveau' => 'required|exists:niveau_scolaires,id_niveau',
            'num_inscription' => 'nullable|string|max:255|unique:eleves,num_inscription',
            'annee_archive' => 'nullable|string|max:4',
            'date_quitter_etablissement' => 'nullable|date',
            'CIN' => 'nullable|string|max:255|unique:eleves,CIN',
            'observation' => 'nullable|string',
        ]);

        Eleve::create($validated);

        return Redirect::route('eleves.index')->with('success', 'Élève créé avec succès.');
    }


    public function edit(Eleve $elefe) 
    {
        $elefe->load('niveauScolaire.typeEtude');

        return Inertia::render('Eleves/Form', [
            'eleve' => $elefe,
            'niveaux' => NiveauScolaire::with('typeEtude')->get()->map(fn($niveau) => [
                'id' => $niveau->id_niveau,
                'label' => $niveau->libelle_niveau . ' (' . ($niveau->typeEtude->libelle_etude ?? 'N/A') . ')',
            ]),
        ]);
    }

    public function update(Request $request, Eleve $elefe) 
    {
        $validated = $request->validate([ 
            'nomAr' => 'required|string|max:255',
            'prenomAr' => 'required|string|max:255',
            'nomFr' => 'required|string|max:255',
            'prenomFr' => 'required|string|max:255',
            'date_naissance' => 'required|date',
            'lieu_naissance' => 'required|string|max:255',
            'code_massar' => 'required|string|unique:eleves,code_massar,' . $elefe->id . '|regex:/^[A-Z][0-9]{9}$/i',
            'id_niveau' => 'required|exists:niveau_scolaires,id_niveau',
             'num_inscription' => 'nullable|string|max:255|unique:eleves,num_inscription,' . $elefe->id,
            'annee_archive' => 'nullable|string|max:4',
            'date_quitter_etablissement' => 'nullable|date',
             'CIN' => 'nullable|string|max:255|unique:eleves,CIN,' . $elefe->id,
            'observation' => 'nullable|string',
        ]);


        $elefe->update($validated);

        return Redirect::route('eleves.index')->with('success', 'Élève mis à jour avec succès.');
    }

    public function destroy(Eleve $elefe)
    {
        $elefe->delete();
        return Redirect::route('eleves.index')->with('success', 'Élève supprimé avec succès.');
    }
}