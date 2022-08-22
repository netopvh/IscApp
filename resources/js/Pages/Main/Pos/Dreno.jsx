import Authenticated from "@/Layouts/Authenticated"
import React from 'react'

export default function Dreno(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <div className="mt-4 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Cuidados com o Dreno
        </div>
        <div className="mt-6 w-full font-semibold">
          <ul className="mt-4">
            <li>- O dreno evita o acúmulo de líquidos dentro do local operado</li>
            <li>- Para manter o dreno funcionando corretamente não se pode quebrar, cortar, tracionar ou fazer movimentos bruscos porque podem acabar arrancando o dreno e causando um ferimento na pele.</li>
            <li>- Caso o dreno saia sozinho, cubra o orifício com um curativo limpo e vá ao hospital.</li>
            <li>- Nunca tente colocar o dreno de volta!</li>
            <li>- Observera cor e a quantidade de líquido eliminado.</li>
            <li>- O dreno não deve causar dor.</li>
            <li>- O tempo de permanência com o dreno varia com o tipo de cirurgia, podendo variar entre poucos dias até algumas semanas.</li>
            <li>- Os drenos pendurados devem manterem abaixo do local onde está inserido. Podendo ser preso a roupa evitando contado com o chão.</li>
          </ul>
        </div>
        <div className="w-full mt-6">
          <img src="/img/curious.svg" />
        </div>
      </div>
    </Authenticated>
  )
}
