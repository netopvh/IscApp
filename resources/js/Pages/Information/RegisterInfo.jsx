import Guest from "@/Layouts/Guest"
import { Link } from "@inertiajs/inertia-react"
import React from 'react'

export default function RegisterInfo() {
  return (
    <Guest>
       <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Como utilizar o aplicativo?
        </div>
        <div className="mt-6 w-full font-normal">
          Para utilizar o aplicativo é necessário informar alguns dados básicos.
        </div>
        <div className="mt-6 p-5 bg-gray-200 rounded-md">
          <ul>
            <li>NOME COMPLETO</li>
            <li>CPF</li>
            <li>DIA DA CIRURGIA</li>
            <li>NOME DO HOSPITAL</li>
          </ul>
        </div>
        <div className="mt-4 text-center">
          <Link href={route('register')} className="font-bold uppercase py-2 px-4 bg-yellow-500 rounded-md">Clique aqui para cadastrar</Link>
        </div>
        <div className="w-full mt-12">
          <img src="img/registerman.svg" />
        </div>
      </div>
    </Guest>
  )
}
