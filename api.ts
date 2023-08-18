import { ITask } from './types/tasks'
import { prisma } from '@/app/api/prisma'

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await prisma.users.findMany()

  return res
}

export const createTask = async (data: any): Promise<any> => {
  const newTask = await prisma.users.create({
    data,
  })
  return newTask
}
