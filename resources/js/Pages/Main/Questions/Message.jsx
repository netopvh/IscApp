import Authenticated from "@/Layouts/Authenticated"
import { Link } from "@inertiajs/inertia-react"
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

export default function Help(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Quando devo mandar mensagem para um profissional?
        </div>
        <div className="mt-6 w-full font-semibold">
          <ul className="list-disc">
            <li>- QUANDO AO FINAL DO QUESTIONÁRIO, APARECER UM SINAL DE ALERTA;</li>
            <li>- QUANDO VOCÊ AO LER AS INFORMAÇÕES SOBRE IFECÇÃO DA FERIDA CIRÚRGICA E ACHAR QUE ESTÁ APRESENTANDO ESSE SINAIS E SINTOMAS;</li>
            <li>- QUANDO VOCÊ TIVER DÚVIDAS SOBRE SEUS SINAIS E SINTOMAS REFERENTE A FERIDA OPERATÓRIA;</li>
            <li>- LEMBRE-SE: ENVIE SUA DÚVIDA E AGUARDA CALMAMENTE A RESPOSTA DE RETORNO!</li>
          </ul>
        </div>
        <div className="mt-10 text-center">
          <a href="https://api.whatsapp.com/send?phone=5569984247213&text=Preciso%de%ajuda." class="bg-green-600 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <FaWhatsapp className="w-4 h-4 mr-2" />
            <span>Entrar em contato aqui!</span>
          </a>
        </div>
      </div>
    </Authenticated>
  )
}
