'use client'

import { useEffect, useState } from 'react'
import { api } from './api/axios'
import { Form } from './components/Form'
import { Header } from './components/Header'

import { Play, Trash2 } from 'lucide-react'

interface taskProps {
  id: string
  task: string
  completed: number | undefined
  created_at: string
  checked: boolean
}

export default function Home() {
  const [newTasks, setNewTasks] = useState<taskProps[]>([])

  function handleChecked(e: any) {
    const newItem = newTasks.map((task) => {
      if (task.id === e.target.id) {
        return {
          ...task,
          checked: e.target.checked,
        }
      }

      return task
    })
    setNewTasks(newItem)
  }

  async function handleGetTasks() {
    const response = await api.get(`/tasks`)
    setNewTasks(response.data)
  }

  async function handleDeleteTasks(id: string) {
    await api.delete(`/tasks/${id}`)
    await handleGetTasks()
  }

  async function handleUpdateTasks(id: string) {
    await api.put(`/tasks/${id}`)
    await handleGetTasks()
  }

  useEffect(() => {
    handleGetTasks()
  }, [])

  const completeTask = newTasks.filter((task) => task.checked).length

  return (
    <div className="flex flex-col bg-preto600 min-h-screen relative overflow-hidden">
      <Header />
      <Form handleGet={handleGetTasks} />
      <main className=" flex-col justify-center text-preto200 flex mt-20 w-full max-w-3xl m-auto">
        <div className="flex justify-between">
          <h1 className="flex text-blueDark">
            Tarefas Criadas
            <span className="ml-2 text-preto100 bg-preto400 rounded-full p-1 m-auto ">
              {newTasks.length}
            </span>
          </h1>

          <h1 className="flex text-purpleDark">
            Concluídas
            <span className="ml-2 text-preto100 bg-preto400 rounded-full p-1 items-center">
              {completeTask}
            </span>
          </h1>
        </div>

        <table>
          <tbody>
            {newTasks.map((task) => {
              if (task.checked === true) {
                return (
                  <tr
                    key={task.id}
                    className="bg-preto400 text-preto100 mt-3 h-16 rounded-lg p-3 flex justify-between"
                  >
                    <td>
                      <label>
                        <input
                          className="flex border-blue border-2 h-[25px] w-[25px] appearance-none rounded-full checked:bg-preto200"
                          id={task.id}
                          name="myCheckbox"
                          value={task.completed}
                          onChange={handleChecked}
                          type="checkbox"
                        />
                      </label>
                    </td>
                    <td className="text-sm justify-start ml-2 items-start line-through">
                      {task.task}
                    </td>
                    <td>
                      <button>
                        <Play
                          className="text-green-600 h-[20px] w-[20px]"
                          onClick={() => handleUpdateTasks(task.id)}
                        />
                      </button>
                    </td>
                  </tr>
                )
              } else {
                return (
                  <tr
                    key={task.id}
                    className="bg-preto400 text-preto100 mt-3 h-16 rounded-lg p-3 flex justify-between"
                  >
                    <td>
                      <label>
                        <input
                          className="flex border-blue border-2 h-[25px] w-[25px] appearance-none rounded-full checked:bg-preto200"
                          id={task.id}
                          name="myCheckbox"
                          value={task.completed}
                          onChange={handleChecked}
                          type="checkbox"
                        />
                      </label>
                    </td>
                    <td className="text-sm justify-start ml-2 items-start">
                      {task.task}
                    </td>
                    <td>
                      <button>
                        <Trash2
                          className="text-preto300 h-[20px] w-[20px]"
                          onClick={() => handleDeleteTasks(task.id)}
                        />
                      </button>
                    </td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </main>
    </div>
  )
}
