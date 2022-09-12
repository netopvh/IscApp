import Authenticated from "@/Layouts/Authenticated"
import React from 'react'

export default function Ferida(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Cuidados com a Ferida
        </div>
        <div className="mt-6 w-full font-semibold">
          <ul className="mt-4">
            <li>- O curativo após a alta deve ser realizado conforme orientação do hospital</li>
            <li>- Retirar os pontos no posto de saúde</li>
            <li>- Evitar a exposição da região operada ao sol por seis meses</li>
            <li>- Evite fazer grandes esforços físicos e carregamento de peso durante as primeiras semanas. Os esforços físicos podem fazer com que sua ferida operatória não cicatrize bem</li>
          </ul>
        </div>
        <div className="w-full mt-6">
          <img src="/img/curious.svg" />
        </div>
      </div>
    </Authenticated>
  )
}
