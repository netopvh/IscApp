import Authenticated from "@/Layouts/Authenticated"
import { Link } from "@inertiajs/inertia-react"
import React from 'react'

export default function Help(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Links para materiais e suporte
        </div>
        <div className="mt-6 w-full font-semibold">
          <ul className="list-disc">
            <li>- CARTILHA CUIDADOS COM ESTOMIAS</li>
            <a target="_blank" className="font-normal text-sm" href="https://www.inca.gov.br/sites/ufu.sti.inca.local/files//med ia/document//livro-cuidados-com-a-sua-estomia.pdf">https://www.inca.gov.br/sites/ufu.sti.inca.local/files//med ia/document//livro-cuidados-com-a-sua-estomia.pdf</a>
            <li>- CARTILHA CUIDADOS COM DRENO DE SUCÃO</li>
            <a target="_blank" className="font-normal text-sm" href="https://hro.org.br/wp-content/uploads/2019/12/Cartilha- de-Cuidados-Dreno-Portovac.pdf">https://hro.org.br/wp-content/uploads/2019/12/Cartilha- de-Cuidados-Dreno-Portovac.pdf</a>
            <li>- CUIDADOS COM A FERIDA OPERATÓRIA</li>
            <a target="_blank" className="font-normal text-sm" href="https://www.into.saude.gov.br/images/pdf/ensino/publica coes/folhetos/atualizados/Folder-Cuidado-Ferida- Cirrgica_Cor_web.pdf">https://www.into.saude.gov.br/images/pdf/ensino/publica coes/folhetos/atualizados/Folder-Cuidado-Ferida- Cirrgica_Cor_web.pdf</a>
            <li>- CUIDADOS PRÉ E PÓS DE COLECISTECTOMIA</li>
            <a target="_blank" className="font-normal text-sm" href="https://eenf.furg.br/images/02_- _Documentos_Do_Site/01_- _Livros_Ebooks_manuais_etc/EEnf_- _Pr%C3%A9_e_p%C3%B3s- operat%C3%B3rio_de_Colecistectomia_- _Orienta%C3%A7%C3%B5es_e_cuidados_de_enfermagem _para_pacientes_e_familiares.pdf">https://eenf.furg.br/images/02_- _Documentos_Do_Site/01_- _Livros_Ebooks_manuais_etc/EEnf_- _Pr%C3%A9_e_p%C3%B3s- operat%C3%B3rio_de_Colecistectomia_- _Orienta%C3%A7%C3%B5es_e_cuidados_de_enfermagem _para_pacientes_e_familiares.pdf</a>
          </ul>
        </div>
      </div>
    </Authenticated>
  )
}
