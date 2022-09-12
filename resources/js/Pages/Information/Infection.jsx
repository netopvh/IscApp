import Guest from "@/Layouts/Guest"
import React from 'react'

export default function Infection() {
  return (
    <Guest>
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          O que é infecção cirúrgica?
        </div>
        <div className="mt-6 w-full font-bold">
          Infecção que ocorre no local da cirurgia dentro de 30 dias
          ou 90 dias após o procedimento cirúrgico.
        </div>
        <div className="w-full mt-12">
          <img src="img/question.svg" />
        </div>
      </div>
    </Guest>
  )
}
