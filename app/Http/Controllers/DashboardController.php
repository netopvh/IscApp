<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use MattDaneshvar\Survey\Models\Entry;
use MattDaneshvar\Survey\Models\Question;
use MattDaneshvar\Survey\Models\Survey;

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

    public function monitor()
    {
        return Inertia::render('Main/Monitor/Monitor');
    }

    public function why()
    {
        return Inertia::render('Main/Monitor/Why');
    }

    public function when()
    {
        return Inertia::render('Main/Monitor/When');
    }

    public function resp()
    {
        return Inertia::render('Main/Monitor/Response');
    }

    public function questionary()
    {
        $survey = Question::orderBy('id' ,'asc')
            ->get()
            ->map(function($data){
                return [
                    'type' => 'radiogroup',
                    'title' => $data->content,
                    'isRequired' => true,
                    'colCount' => 3,
                    'choices' => $data->options
                ];
            });

            // dd($survey);

        //     "type": "radiogroup",
        //   "name": "q1",
        //   "title": "Umidade?",
        //   "isRequired": true,
        //   "colCount": 3,
        //   "choices": [
        //     "Seca",
        //     "Úmida",
        //     "Vazando"
        //   ]
        // dd($survey);
        return Inertia::render('Main/Monitor/Questionary', [
            'question' => $survey,
        ]);
    }

    public function saveQuestionary(Request $request)
    {
        $data = $this->replace_key($request->all());
        $survey = Survey::find(1);
        (new Entry)->for($survey)->by(auth()->user())->fromArray($data)->push();
        return redirect()->back()->with('message', 'Seu questionário foi gravado com sucesso');
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

    private function replace_key($arr) {
        $keysAr = array_keys($arr);
        $valuesAr = array_values($arr);
        $newKeys = [];
        
        foreach($keysAr as $key) {
            array_push($newKeys, "q" . substr($key, 8));
        }

        $arr = array_combine($newKeys, $valuesAr);

        return $arr;  
    }
}
