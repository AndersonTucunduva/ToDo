'use client'

import { PlusCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { api } from '@/app/api/axios'

interface PropsTask {
  task: string
}

type handleProps = {
  handleGet: () => void
}

export function Form({ handleGet }: handleProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<PropsTask>()

  async function handleRegister(data: PropsTask) {
    const { task } = data
    await api.post('/tasks', {
      task,
    })
    handleGet()
    reset()
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
