import Authenticated from "@/Layouts/Authenticated"
import React from 'react'

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

export default function Questionary(props) {

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="mt-4 flex flex-col">
        {
          props.survey.map((item, index) => <SurveyItem key={index} item={item} />)
        }
      </div>
    </Authenticated>
  )
}
