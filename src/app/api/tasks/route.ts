import { NextResponse } from 'next/server'
import { prisma } from '../prisma'

export async function GET() {
  return NextResponse.json({ message: 'hello' })
}

export async function POST(req: Request, res: Response) {
  const { task } = req.body

  const newTask = await prisma.users.create({
    data: {
      task,
    },
  })
  return newTask
}
