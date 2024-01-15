import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { GrValidate } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { Formulario } from './components/Formulario'

export const Form = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log("envio", data)
    methods.reset()
    setSuccess(true)
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >

        <Formulario />

        <div className="mt-5">
          <p className="font-semibold text-blue-500 mb-5 flex items-center gap-2 place-content-center">
            <BsFillCheckSquareFill /> Adhiero al Partido Libertario de La Pampa
          </p>
          <button
            disabled={success}
            onClick={onSubmit}
            className="mx-auto p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
          >
            <GrValidate className='text-xl' />
            Afiliarme
          </button>
          {success && (
            <p className="font-semibold text-green-500 mt-5 flex items-center gap-2 place-content-center">
              <BsFillCheckSquareFill /> El formulario se ha enviado correctamente
            </p>
          )}
        </div>
      </form>
    </FormProvider>
  )
}