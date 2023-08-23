import { prisma } from './prisma'

export async function POST(req: Request) {
  /* const taskSchema = z.object({
    task: z.string(),
  }) */
  console.log(req.body)
  const { task } = await req.json()
  console.log(req.body)
  await prisma.users.create({
    data: {
      task,
    },
  })
}
