<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $survey = Question::orderBy('id', 'asc')
            ->get()
            ->map(function ($data) {
                return [
                    'type' => $data->type == 'radio' ? 'radiogroup' : $data->type,
                    'title' => $data->content,
                    'isRequired' => $data->type == 'text' ? false : true,
                    'colCount' => 3,
                    'choices' => $data->options ? $data->options : null
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
        $entries = Entry::with(['survey'])->where('participant_id', Auth::user()->id)
        ->get()
        ->map(function($data){
            return [
                'id' => $data->id,
                'created_at' => $data->created_at->format('d/m/Y H:i:s'),
            ];
        });

        return Inertia::render('Main/Questions/Follow', [
            'entries' => $entries,
        ]);
    }

    public function result($id)
    {
        $entry = Entry::with(['survey', 'answers.question'])->find($id);

        return Inertia::render('Main/Monitor/Result', [
            'entry' => $entry,
        ]);
    }

    public function reference()
    {
        return Inertia::render('Main/Questions/Reference');
    }

    public function help()
    {
        return Inertia::render('Main/Help');
    }

    private function replace_key($arr)
    {
        $keysAr = array_keys($arr);
        $valuesAr = array_values($arr);
        $newKeys = [];

        foreach ($keysAr as $key) {
            array_push($newKeys, "q" . substr($key, 8));
        }

        $arr = array_combine($newKeys, $valuesAr);

        return $arr;
    }
}
