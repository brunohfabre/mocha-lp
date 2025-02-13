import { env } from '@/env'
import { redirect } from 'next/navigation'

async function authenticateUser(code: string): Promise<{
  token: string
}> {
  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/auth/github`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code,
    }),
  })

  const result = await response.json()

  return result
}

export default async function GithubAuthCallback({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const data = (await searchParams) as {
    code?: string
  }

  if (!data.code) {
    return redirect('/')
  }

  const response = await authenticateUser(data.code)

  return redirect(`mocha-desktop://auth?token=${response.token}`)
}
