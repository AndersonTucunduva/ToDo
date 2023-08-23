import { NextRequest, NextResponse } from 'next/server'

export default function getUsers(req: NextRequest, res: NextResponse) {
  const users = [
    {
      name: 'bard',
      email: 'bard@exemplo.com',
    },
    {
      name: 'Alice',
      email: 'alice@example.com',
    },
  ]
  res.status(200)
}
