<?php

namespace App\Http\Controllers;

use App\Models\NiveauScolaire;
use App\Models\TypeEtude;
use Illuminate\Http\Request; // Add Request
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class NiveauScolaireController extends Controller
{
    // --- Add Request and Paginate ---
    public function index(Request $request) // Inject Request
    {
        $perPage = $request->input('per_page', 10); // Or your preferred default

        return Inertia::render('Niveaux/Index', [
            'niveaux' => NiveauScolaire::with('typeEtude')
                            ->paginate($perPage) // Use pagination
                            ->withQueryString(),
            // 'filters' => $request->only(['per_page']), // Optional
        ]);
    }
    // --- End Add Request and Paginate ---

    // create(), store(), edit(), update(), destroy() methods remain the same...
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
            'niveau' => $niveau,
            'etudes' => TypeEtude::all(['id_etudes', 'libelle_etude']),
        ]);
    }

    public function update(Request $request, NiveauScolaire $niveau)
    {
        $validated = $request->validate([
            'libelle_niveau' => 'required|string|max:255|unique:niveau_scolaires,libelle_niveau,' . $niveau->id_niveau.',id_niveau',
            'id_etudes' => 'required|exists:type_etudes,id_etudes',
        ]);
        $niveau->update($validated);
        return Redirect::route('niveaux.index')->with('success', 'Niveau mis à jour.');
    }

    public function destroy(NiveauScolaire $niveau)
    {
        $niveau->delete();
        return Redirect::route('niveaux.index')->with('success', 'Niveau supprimé.');
    }
}