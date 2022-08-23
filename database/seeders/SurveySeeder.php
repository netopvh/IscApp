<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use MattDaneshvar\Survey\Models\Survey;

class SurveySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $survey = Survey::create([
            'name' => 'Questionário de monitoramento da ferida cirúrgica',
            'settings' => ['limit-per-participant' => 15]
        ]);

        $survey->questions()->create([
            'content' => 'Umidade?',
            'type' => 'radio',
            'options' => ['Seca', 'Umida', 'Vazando']
        ]);

        $survey->questions()->create([
            'content' => 'Secreção?',
            'type' => 'radio',
            'options' => ['Sem secreção', 'Pus', 'Outra']
        ]);

        $survey->questions()->create([
            'content' => 'Cor?',
            'type' => 'radio',
            'options' => ['Cor da pele', 'Vermelha', 'Escura']
        ]);

        $survey->questions()->create([
            'content' => 'Dor?',
            'type' => 'radio',
            'options' => ['Sem dor', 'Aumentando', 'Diminuindo']
        ]);

        $survey->questions()->create([
            'content' => 'Inchaço?',
            'type' => 'radio',
            'options' => ['Sem inchaço','Aumentando', 'Diminuindo']
        ]);

        $survey->questions()->create([
            'content' => 'Cheiro?',
            'type' => 'radio',
            'options' => ['Sem cheiro','Aumentando', 'Diminuindo']
        ]);

        $survey->questions()->create([
            'content' => 'Pontos?',
            'type' => 'radio',
            'options' => ['Abertos','Fechados']
        ]);

        $survey->questions()->create([
            'content' => 'Febre?',
            'type' => 'radio',
            'options' => ['Sem febre','Com febre']
        ]);
    }
}
