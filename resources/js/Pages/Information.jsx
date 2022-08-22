import NavLink from "@/Components/NavLink";
import Guest from "@/Layouts/Guest";
import { Link } from "@inertiajs/inertia-react";
import React from 'react';
import { FaLevelDownAlt } from "react-icons/fa";

export default function Information() {
  return (
    <Guest>
      <div className="flex flex-col items-center">
        <div className="mt-2 font-bold text-black rounded-full bg-yellow-600 flex items-center text-center justify-center" style={{ height: '160px', width: '160px', fontSize: '20px' }}>
          Informações Gerais
        </div>
        <div className="mt-20">
          <FaLevelDownAlt className="w-12 h-12" />
        </div>
        <div className="mt-20 flex flex-col">
          <NavLink href={route('infection')} active={true}>O que é infecção de Sítio Cirurgico?</NavLink>
          <NavLink href={route('examples')} active={true}>Exemplos de Manifestação</NavLink>
          <NavLink href={route('manifest')} active={true}>Como se manifesta?</NavLink>
          <NavLink href={route('ingress')} active={true}>Como realizar o cadastro?</NavLink>
        </div>
      </div>
    </Guest>
  )
}
