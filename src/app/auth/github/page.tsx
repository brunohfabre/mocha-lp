import { env } from '@/env'
import { redirect } from 'next/navigation'

export default function GithubAuth() {
  return redirect(
    `https://github.com/login/oauth/authorize?client_id=${env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=user`
  )
}
