import Authenticated from "@/Layouts/Authenticated"
import { Link } from "@inertiajs/inertia-react"
import React from 'react'

export default function Help(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Links para materiais e suporte
        </div>
        <div className="mt-6 w-full font-semibold">
          <ul className="list-disc">
            <li>- CARTILHA CUIDADOS COM ESTOMIAS</li>
            <a target="_blank" className="font-normal text-sm" href="http://l1nq.com/qTlPx">http://l1nq.com/qTlPx</a>
            <li>- CARTILHA CUIDADOS COM DRENO DE SUCÃO</li>
            <a target="_blank" className="font-normal text-sm" href="http://l1nq.com/a2i8S">http://l1nq.com/a2i8S</a>
            <li>- CUIDADOS COM A FERIDA OPERATÓRIA</li>
            <a target="_blank" className="font-normal text-sm" href="http://l1nq.com/gfGb3">http://l1nq.com/gfGb3</a>
            <li>- CUIDADOS PRÉ E PÓS DE COLECISTECTOMIA</li>
            <a target="_blank" className="font-normal text-sm" href="http://l1nq.com/zXp7O">http://l1nq.com/zXp7O</a>
          </ul>
        </div>
      </div>
    </Authenticated>
  )
}
