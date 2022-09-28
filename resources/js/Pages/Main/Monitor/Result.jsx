import Authenticated from "@/Layouts/Authenticated"
import { Link } from "@inertiajs/inertia-react"
import React from 'react'

export default function Result(props) {

  const { entry, images, auth, errors } = props;
  return (
    <Authenticated
      auth={auth}
      errors={errors}
    >
      <div className="mt-4 mb-16 flex flex-col">
        <div className="uppercase font-bold text-lg border-b border-b-gray-800">
          Respostas do Questionário
        </div>
        <div className="flex flex-col mt-4 w-full">
          {
            entry.answers.map((answer, index) => {
              return (
                <div>
                  <div className="py-2 font-bold">{index + 1}. {answer.question.content}</div>
                  <div>{answer.value}</div>
                </div>
              )
            })
          }
        </div>
        <div className="flex flex-col mt-2 w-full">
            <div className="py-2 font-bold">10. Imagem da ferida cirúrgica</div>
            <div>
                {images.map((image, index) => {
                    return (
                        <div key={index}>
                            <img src={'/storage/'+image.path} alt="Image 1" />
                        </div>
                    )
                })
            }
            </div>
        </div>
      </div>
    </Authenticated>
  )
}
