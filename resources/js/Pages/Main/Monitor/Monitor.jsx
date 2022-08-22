import NavLink from "@/Components/NavLink"
import Authenticated from "@/Layouts/Authenticated"
import React from 'react'

export default function Monitor(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="flex flex-col items-center">
        <div className="mt-12 font-bold uppercase text-black rounded-full bg-yellow-500 flex items-center text-center justify-center" style={{ height: '220px', width: '220px', fontSize: '20px' }}>
          Monitoramento da ferida cirúrgica
        </div>
        <div className="mt-20 flex flex-col">
          <NavLink href={route('dashboard.monitor.why')} active={true}>Por quê devo responder ao questionário?</NavLink>
          <NavLink href={route('dashboard.monitor.when')} active={true}>Quando devo responder?</NavLink>
          <NavLink href={route('dashboard.monitor.resp')} active={true}>Clique aqui para responder</NavLink>
        </div>
      </div>
    </Authenticated>
  )
}
