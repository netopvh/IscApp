<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard');
    }

    public function pre()
    {
        return Inertia::render('Main/Pre/PreOperation');
    }

    public function risk()
    {
        return Inertia::render('Main/Pre/Risk');
    }

    public function before()
    {
        return Inertia::render('Main/Pre/BeforeOp');
    }

    public function daily()
    {
        return Inertia::render('Main/Pre/DailyOp');
    }

    public function pos()
    {
        return Inertia::render('Main/Pos/PosOperation');
    }

    public function ferida()
    {
        return Inertia::render('Main/Pos/Ferida');
    }

    public function dreno()
    {
        return Inertia::render('Main/Pos/Dreno');
    }

    public function question()
    {
        return Inertia::render('Main/Questions/Answer');
    }

    public function message()
    {
        return Inertia::render('Main/Questions/Message');
    }

    public function follow()
    {
        return Inertia::render('Main/Questions/Follow');
    }

    public function reference()
    {
        return Inertia::render('Main/Questions/Reference');
    }

    public function help()
    {
        return Inertia::render('Main/Help');
    }
}
