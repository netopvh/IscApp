import Authenticated from "@/Layouts/Authenticated"
import { Link } from "@inertiajs/inertia-react"
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

export default function Response(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Vamos lá responder o questionário?
        </div>
        <div className="mt-6 w-full font-semibold">
          <ul className="mt-4 list-disc">
            <li>- Você responderá 10 perguntas</li>
            <li>- Leia com atenção</li>
            <li>- Para cada pergunta escolha somente uma resposta</li>
            <li>- Não existe resposta CERTA ou ERRADA</li>
            <li>- Ao final do questionário, você pode tirar uma foto da ferida e nos enviar</li>
            <li>- Desejamos boa recuperação!</li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <Link href={route('dashboard.monitor.questionary')} className="font-bold uppercase py-2 px-4 bg-yellow-500 rounded-md">Clique aqui para responder</Link>
        </div>
        <div className="mt-6 w-full">
          <img src="/img/happy.svg" />
        </div>
      </div>
    </Authenticated>
  )
}
