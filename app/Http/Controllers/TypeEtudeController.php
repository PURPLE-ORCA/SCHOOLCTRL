<?php

namespace App\Http\Controllers;

use App\Models\TypeEtude;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;


class TypeEtudeController extends Controller
{
    public function index()
    {
        return Inertia::render('Etudes/Index', [
            'etudes' => TypeEtude::paginate(10)->withQueryString(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Etudes/Form', [
            'etude' => null,
        ]);
    }

    public function store(Request $request) 
    {
        $validated = $request->validate([
            'libelle_etude' => 'required|string|max:255|unique:type_etudes,libelle_etude',
        ]);

        TypeEtude::create($validated);

        return Redirect::route('etudes.index')->with('success', 'Type d\'étude créé.');
    }


    public function edit(TypeEtude $etude)
    {
        return Inertia::render('Etudes/Form', [
            'etude' => $etude,
        ]);
    }

    public function update(Request $request, TypeEtude $etude) 
    {
         $validated = $request->validate([
             'libelle_etude' => 'required|string|max:255|unique:type_etudes,libelle_etude,' . $etude->id_etudes.',id_etudes', 
         ]);

        $etude->update($validated);

        return Redirect::route('etudes.index')->with('success', 'Type d\'étude mis à jour.');
    }

    public function destroy(TypeEtude $etude)
    {
        $etude->delete();
        return Redirect::route('etudes.index')->with('success', 'Type d\'étude supprimé.');
    }
}