import Authenticated from "@/Layouts/Authenticated"
import { Link } from "@inertiajs/inertia-react"
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

export default function Why(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Por que devo responder ao questionário?
        </div>
        <div className="mt-6 w-full font-semibold">
          <ul className="list-disc">
            <li>- Pesquisas mostram que a maioria das infecções cirúrgicas aparecem
              após a alta hospitalar, e pela falta de acompanhamento profissional,
              acabam sendo identificadas TARDIAMENTE, ocasionando maiores complicações ao paciente</li>
            <li>- Ao responder o questionário, o seu caso será monitorado e,
              se preciso, um profissional fará as orientações</li>
          </ul>
        </div>
        <div className="mt-10 w-full">
          <img src="/img/note.svg" />
        </div>
      </div>
    </Authenticated>
  )
}
