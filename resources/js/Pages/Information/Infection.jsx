import Guest from "@/Layouts/Guest"
import React from 'react'

export default function Infection() {
  return (
    <Guest>
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          O que é infecção de sítio cirurgico?
        </div>
        <div className="mt-6 w-full font-bold">
          Infecção que ocorre no local da cirurgia dentro de 30 dias
          ou em até um ano em situações especiais.
        </div>
        <div className="w-full mt-12">
          <img src="img/question.svg" />
        </div>
      </div>
    </Guest>
  )
}
