import NavLink from "@/Components/NavLink"
import Authenticated from "@/Layouts/Authenticated"
import React from 'react'

export default function Answer(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="flex flex-col items-center">
        <div className="mt-16 font-bold uppercase text-black rounded-full bg-yellow-500 flex items-center text-center justify-center" style={{ height: '160px', width: '160px', fontSize: '20px' }}>
          Dúvidas
        </div>
        <div className="mt-20 flex flex-col">
          <NavLink href={route('dashboard.question.message')} active={true}>Quando devo mandar mensagem para um profissional?</NavLink>
          <NavLink href={route('dashboard.question.follow')} active={true}>Acompanhe o progresso do seu questionário</NavLink>
          <NavLink href={route('dashboard.question.reference')} active={true}>Referências</NavLink>
        </div>
      </div>
    </Authenticated>
  )
}
