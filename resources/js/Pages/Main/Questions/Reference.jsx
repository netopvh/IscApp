import Authenticated from "@/Layouts/Authenticated"
import React from 'react'

export default function Reference(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Referências
        </div>
        <div className="mt-6 w-full font-semibold">
          <ul className="list-disc">
            <li>- ELABORAÇÃO:</li>
            <div className="text-md">
            Núbia Souza Correia. Enfermeira. Mestre em Prática do Cuidado em Saúde - Mestrado Profissional da Universidade Federal do Paraná - UFPR
            </div>
          </ul>
          <div className="mt-10">
          Elaine Drehmer de Almeida Cruz. Enfermeira. Profª. Drª. do Programa de Pós-graduação em Cuidado em Saúde da Universidade Federal do Paraná -UFPR
          </div>
          <div className="mt-10">
          Produto originado da Dissertação de Mestrado:"Aplicativo móvel para vigilância pós-alta de infecção de sítio cirúrgico".
          </div>
          <div className="mt-10">
            APOIO: <br />
            COFEN/CAPES
          </div>
          <div className="mt-10 text-center">
            Porto Velho RO, 2022
          </div>
        </div>
      </div>
    </Authenticated>
  )
}
