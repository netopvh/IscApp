import Authenticated from "@/Layouts/Authenticated"
import { Link } from "@inertiajs/inertia-react"
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

export default function When(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Quando devo responder?
        </div>
        <div className="mt-6 w-full font-semibold">
          <div>Você responderá o mesmo questionário QUATRO vezes</div>
          <ul className="mt-4 list-disc">
            <li>- A primeira vez 7 DIAS após a cirurgia</li>
            <li>- A segunda vez 14 DIAS após a cirurgia</li>
            <li>- A terceira vez 21 DIAS após a cirurgia</li>
            <li>- Pela última vez: 30 DIAS após a cirurgia</li>
          </ul>
        </div>
        <div className="mt-10 w-full">
          <img src="/img/question.svg" />
        </div>
      </div>
    </Authenticated>
  )
}
