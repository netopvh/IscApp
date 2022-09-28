import Authenticated from "@/Layouts/Authenticated"
import React from 'react'
import { Survey } from "survey-react-ui";
import { Model, StylesManager } from "survey-core";
import { Inertia } from "@inertiajs/inertia";

const SurveyQuestion = ({ question }) => {
  return (
    <>
      <div className="my-4 text-md font-bold">- {question.content}</div>
      <div className="flex">
        {
          question.options.map((option, index) => {
            return (
              <div className="mr-4">
                <label htmlFor="">
                  {option}
                  <input type="radio" className="ml-2" />
                </label>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

const SurveyItem = ({ item }) => {
  return (
    <>
      <div className="mb-4 uppercase font-bold text-lg border-b border-b-gray-800">
        {item.name}
      </div>
      {item.questions.map((question, index) => <SurveyQuestion key={index} question={question} />)}
    </>
  )
}

StylesManager.applyTheme("defaultV2");

export default function Questionary(props) {

  const { question, flash} = props;

  function onValueChanged(_, options) {
    console.log("New value: " + options.value);
  }

  function onComplete(survey) {
    console.log("Survey complete! Results: " + JSON.stringify(survey.data));
    // Inertia.post('dashboard.monitor.questionary.store', survey.data);
    Inertia.post(route('dashboard.monitor.questionary.store'), survey.data);
  }

  function onUpload(survey) {
    console.log("Upload");
  }

  const json = {
    completedHtml: "<h3>Agradecemos seu feed</h3> <h5>Mantenha suas informações atualizadas.</h5>",
    pages: [{
      name: "page1",
      elements: question
    }]
  }

  const model = new Model(json);

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="text-lg font-semibold text-center">Questionário de monitoramento da ferida cirúrgica</div>
      {flash.message && (
        <div className="w-full py-4 px-8 bg-green-500 text-white font-semibold">{flash.message}</div>
      )}
      <Survey
        model={model}
        onComplete={onComplete}
        onValueChanged={onValueChanged}
        onUploadFiles={onUpload}
         />
    </Authenticated>
  )
}
