import Authenticated from "@/Layouts/Authenticated"
import { Link } from "@inertiajs/inertia-react"
import React from 'react'

export default function Follow(props) {

  const { entries, auth, errors } = props;

  return (
    <Authenticated
      auth={auth}
      errors={errors}
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
        <div className="flex flex-col mt-2 w-full">
          {
            entries.map((entry, index) => <Link href={route('dashboard.question.result', {id: entry.id})} key={index} className="py-4 uppercase font-bold">Questionário {index + 1} - {entry.created_at}</Link>)
          }
        </div>
      </div>
    </Authenticated>
  )
}
