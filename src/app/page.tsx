import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href='mocha-desktop://teste'>go to mocha</Link>
    </main>
  );
}
