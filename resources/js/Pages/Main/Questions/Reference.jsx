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
            <div className="text-md">NÚBIA SOUZA CORREIA. ENFERMEIRA.
              MESTRE EM PRÁTICA DO CUIDADO EM SAÚDE - MESTRADO PROFISSIONAL DA UNIVERSIDADE FEDERAL DO PARANÁ - UFPR.</div>
          </ul>
          <div className="mt-10">
            ELAINE DREHMER DE ALMEIDA CRUZ. ENFERMEIRA. PROFa DRa. DO DEPARTAMENTO DE
            ENFERMAGEM DA UNIVERSIDADE FEDERAL DO PARANÁ.
          </div>
          <div className="mt-10">
            Produto originado da Dissertação de Mestrado:
            "Aplicativo móvel para vigilância de infecção de Sítio Cirúrgico Pós Alta Hospitalar"
          </div>
          <div className="mt-10 text-center">
            Porto Velho RO, 2022
          </div>
        </div>
      </div>
    </Authenticated>
  )
}
