// app/page.tsx
import Link from "next/link";

export default function Landing() {
  return (
    <main>
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-lg bg-blue-600" />
            <span className="font-semibold">Tether</span>
          </div>
          <nav className="flex items-center gap-3">
            <Link href="/commons" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-neutral-200 hover:bg-neutral-50">
              Enter Commons
            </Link>
            <Link href="/login" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-neutral-200 hover:bg-neutral-50">
              Log in
            </Link>
            <Link href="/signup" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700">
              Sign up
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Community, but <span className="text-blue-600">smaller</span>.
        </h1>
        <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
          Join local chat rooms tailored to your interests — never more than a few dozen people.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/commons" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-neutral-200 hover:bg-neutral-50">
            Explore Commons
          </Link>
          <Link href="/signup" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700">
            Create account
          </Link>
        </div>
      </section>
    </main>
  );
}
