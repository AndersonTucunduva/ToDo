import { ITask } from './types/tasks'
import { prisma } from '@/app/api/prisma'

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await prisma.users.findMany()

  return res
}
