import Authenticated from "@/Layouts/Authenticated"
import React from 'react'

export default function BeforeOp(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Antes da Cirurgia
        </div>
        <div className="mt-6 w-full font-semibold">
          Comunique seu médico caso faça uso de anticoagulantes (AAS, Clopidogrel, Marevan, Clexane), caso necessário, ele irá suspender seu uso;
          <ul className="mt-4">
            <li>-  Será necessário ficar de 8 a 12 horas de jejum. É permitido um gole de água para tomar medicamento.</li>
            <li>- Caso possua, traga seus exames recentes e seus medicamentos de uso contínuo</li>
          </ul>
        </div>
        <div className="w-full p-2 bg-gray-200 rounded-lg text-center mt-8">
          <div className="text-lg font-bold uppercase">Lembrete</div>
          <div>Por que é necessário manter o jejum? Os alimentos que engolimos, 
            líquidos ou sólidos, não entram nas vias respiratórias porque dispomos 
            de mecanismos de defesa que fecham sua entrada, o que faz com que eles se 
            dirijam ao estômago. Durante a anestesia, esses mecanismos de defesa são 
            perdidos e, na eventualidade de ocorrer vômito, o alimento poderá entrar 
            nas vias respiratórias e provocar complicações pulmonares muito graves!!
            </div>
        </div>
      </div>
    </Authenticated>
  )
}
