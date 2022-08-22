import NavLink from "@/Components/NavLink"
import Authenticated from "@/Layouts/Authenticated"
import React from 'react'

export default function PreOperation(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="flex flex-col items-center">
        <div className="mt-2 font-bold text-black rounded-full bg-yellow-600 flex items-center text-center justify-center" style={{ height: '160px', width: '160px', fontSize: '20px' }}>
          Pré Operatório
        </div>
        <div className="mt-20 flex flex-col">
          <NavLink href={route('dashboard.pre.risk')} active={true}>Risco Cirúrgico?</NavLink>
          <NavLink href={route('dashboard.pre.before')} active={true}>Antes da Cirurgia</NavLink>
          <NavLink href={route('dashboard.pre.daily')} active={true}>No dia da Cirurgia</NavLink>
        </div>
      </div>
    </Authenticated>
  )
}
