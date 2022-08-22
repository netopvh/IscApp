import Guest from "@/Layouts/Guest"
import React from 'react'

export default function Manifest() {
  return (
    <Guest>
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Como se manifesta a infecção?
        </div>
        <div className="mt-6 w-full font-bold rounded-lg shadow">
          <ul className="divide-y-2 divide-gray-100">
            <li className="p-2">Drenagem de pus</li>
            <li className="p-2">Dor</li>
            <li className="p-2">Inchaço</li>
            <li className="p-2">Vermelhidão</li>
            <li className="p-2">Calor</li>
            <li className="p-2">Febre (temperatura > 38C)</li>
            <li className="p-2">Abertura de ferida</li>
          </ul>
        </div>
        <div className="w-full mt-12">
          <img src="img/question.svg" />
        </div>
      </div>
    </Guest>
  )
}
