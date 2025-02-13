import Link from 'next/link'

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-8">
      <span className="animate-bounce">Loading GitHub info.</span>

      <Link href="/" className="hover:underline text-sm">
        Back to home
      </Link>
    </div>
  )
}
