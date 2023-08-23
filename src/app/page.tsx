'use client'

import { useEffect, useState } from 'react'
import { api } from './api/axios'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Summary } from './components/Summary'

export interface tasksProps {
  id: string
  task: string
  completed: string
  created_at: string
}

export default function Home() {
  const [tasks, setTasks] = useState<tasksProps>('')

  async function handleGetTasks() {
    const { data } = await api.get('/')
    setTasks(data)
  }
  useEffect(() => {
    handleGetTasks()
  }, [])

  return (
    <div className="flex flex-col bg-preto600 min-h-screen relative">
      <Header />
      <Form />
      <Summary tasks={tasks} />
    </div>
  )
}
