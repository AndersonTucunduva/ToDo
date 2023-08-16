import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from './prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { task } = req.body

  const creat = await prisma.users.create({
    data: {
      task,
    },
  })

  return res.status(201).json(creat)
}
