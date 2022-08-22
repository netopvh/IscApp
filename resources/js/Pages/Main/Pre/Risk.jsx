import Authenticated from "@/Layouts/Authenticated"
import React from 'react'

export default function Risk(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Riscos Cirúrgicos
        </div>
        <div className="mt-6 w-full font-bold">
          Os riscos cirúrgicos incluem:
          <ul>
            <li>- Comorbidades: hipertensão, diabetes, doença renal crônica, doença coronariana, asma, doença pulmonar obstrutiva crônica.</li>
            <li>- Elitismo, tabagismo, sedentarismo.</li>
            <li>- Alergias medicamentosas.</li>
          </ul>
        </div>
        <div className="w-full mt-12">
          <img src="/img/medical-1.svg" />
        </div>
      </div>
    </Authenticated>
  )
}
