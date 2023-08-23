import { api } from '@/app/api/axios'
import { ITask } from './types/tasks'
import { prisma } from '@/app/api/prisma'

export const getAllTodos = async (): Promise<any> => {
  const res = await api.get('/')

  return res
}
