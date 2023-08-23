'use client'

import { Trash2 } from 'lucide-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { tasksProps } from '@/app/page'

interface TasksPropsSchema {
  task: tasksProps
}

export function Summary(tasks: TasksPropsSchema) {
  const [checked, setChecked] = useState(false)

  function handleCheck() {
    setChecked(!checked)
  }

  const completeTask = tasks.filter((task) => task.completed === true).length

  return (
    <>
      <main className=" flex-col justify-center text-preto200 flex mt-20 w-full max-w-3xl m-auto">
        <div className="flex justify-between">
          <h1 className="flex text-blueDark">
            Tarefas Criadas
            <span className="ml-2 text-preto100 bg-preto400 rounded-full p-1 m-auto ">
              {tasks.length}
            </span>
          </h1>

          <h1 className="flex text-purpleDark">
            Concluídas
            <span className="ml-2 text-preto100 bg-preto400 rounded-full p-1 items-center">
              {completeTask} de {tasks.length}
            </span>
          </h1>
        </div>
        <table>
          <tbody>
            {tasks.map((task: any) => {
              return (
                <tr
                  key={task.id}
                  className="bg-preto400 text-preto100 mt-3 h-16 rounded-lg p-3 flex justify-between"
                >
                  <td>
                    <Checkbox.Root
                      checked={task.completed}
                      onCheckedChange={handleCheck}
                      className="flex border-blue border-2 h-[25px] w-[25px] appearance-none rounded-full bg-preto400"
                      id="c1"
                    >
                      <Checkbox.Indicator className="text-preto100 m-auto text-base">
                        <CheckIcon />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                  </td>
                  <td className="text-sm justify-start ml-2 items-start">
                    {task.task}
                  </td>
                  <td>
                    <button>
                      <Trash2 className="text-preto300 h-[20px] w-[20px]" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    </>
  )
}
