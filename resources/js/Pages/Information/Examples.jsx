import Guest from "@/Layouts/Guest"
import React from 'react'

export default function Examples() {
  return (
    <Guest>
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Exemplos de Manifestação
        </div>
        <div className="w-full mt-10">
          <img src="img/infections.png" />
        </div>
      </div>
    </Guest>
  )
}
