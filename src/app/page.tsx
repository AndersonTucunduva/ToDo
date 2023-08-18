import { getAllTodos } from '../../api'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Summary } from './components/Summary'

export default async function Home() {
  const tasks = await getAllTodos()

  return (
    <div className="flex flex-col bg-preto600 min-h-screen relative">
      <Header />
      <Form />
      <Summary tasks={tasks} />
    </div>
  )
}
