import Authenticated from "@/Layouts/Authenticated"
import React from 'react'

export default function DailyOp(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          No dia da Cirurgia
        </div>
        <div className="mt-6 w-full font-semibold">
          <ul className="mt-4">
            <li>- Traga seus documentos</li>
            <li>- Tome banho antes de ir para o centro cirúrgico</li>
            <li>- Retire brincos, anéis e colares. Próteses dentárias,
              óculos e/ou lentes de contato, além de celulares, também não serão permitidos</li>
          </ul>
        </div>
        <div className="w-full p-2 bg-gray-100 rounded-lg text-center mt-8">
          <div>
            Após o término da cirurgia, você será conduzido a uma sala de 
            recuperação anestésica, onde permanecerá aos cuidados da enfermagem.
          </div>
        </div>
      </div>
    </Authenticated>
  )
}
