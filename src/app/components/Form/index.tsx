'use client'

import { PlusCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm()

  function handleRegister() {
    console.log('oi')
  }
  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <div className="justify-center flex -mt-7 p-1 gap-2 w-full items-center">
        <input
          className="w-full max-w-2xl bg-preto400 h-14 border-none rounded-lg text-preto100 p-4"
          placeholder="Adicione uma nova tarefa"
          {...register('task')}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-24 h-14 bg-blueDark text-preto100 rounded-lg border-none cursor-pointer items-center justify-center gap-2 flex"
        >
          Criar <PlusCircle size={16} />
        </button>
      </div>
    </form>
  )
}
