import NavLink from "@/Components/NavLink"
import Authenticated from "@/Layouts/Authenticated"
import React from 'react'

export default function PosOperation(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="flex flex-col items-center">
        <div className="mt-2 font-bold text-black rounded-full bg-yellow-600 flex items-center text-center justify-center" style={{ height: '160px', width: '160px', fontSize: '20px' }}>
          Pós Operatório
        </div>
        <div className="mt-20 flex flex-col">
          <NavLink href={route('dashboard.pos.ferida')} active={true}>Cuidados com a ferida</NavLink>
          <NavLink href={route('dashboard.pos.dreno')} active={true}>Cuidados com o dreno</NavLink>
        </div>
      </div>
    </Authenticated>
  )
}
