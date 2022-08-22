<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GuestController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome');
    }

    public function info()
    {
        return Inertia::render('Information');
    }

    public function infection()
    {
        return Inertia::render('Information/Infection');
    }

    public function examples()
    {
        return Inertia::render('Information/Examples');
    }

    public function manifest()
    {
        return Inertia::render('Information/Manifest');
    }

    public function ingress()
    {
        return Inertia::render('Information/RegisterInfo');
    }
}
