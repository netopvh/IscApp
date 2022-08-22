import Authenticated from "@/Layouts/Authenticated"
import { Link } from "@inertiajs/inertia-react"
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

export default function Follow(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Acompanhe seu progresso aqui!
        </div>
        <div className="mt-6 w-full font-semibold">
          <ul className="list-disc">
            <li>- ABRIRÁ AS INFORMAÇÕES REFERENTE AS RESPOSTAS DADAS NO QUESTIONÁRIO;</li>
            <li>- MOSTRARÁ OS DIAS QUE FORAM RESPONDIDOS;</li>
          </ul>
        </div>
        <div className="mt-10 w-full">
          <img src="/img/follow.svg" />
        </div>
      </div>
    </Authenticated>
  )
}
