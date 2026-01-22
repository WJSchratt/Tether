// app/page.tsx
import Link from "next/link";

export default function Landing() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <section className="mx-auto max-w-2xl px-4 pt-32 text-center">
        {/* Hero */}
        <h1 className="text-5xl font-bold tracking-tight text-neutral-100">
          Community is <span className="text-blue-500">Everywhere</span>
        </h1>

        <p className="mt-6 text-lg text-neutral-400">
          In a world where everyone  is isolated, find connection
        </p>

        {/* Search bar */}
        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Where can you find community?"
            className="w-full max-w-md px-4 py-3 rounded-l-xl bg-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none "
          />
          <button className="px-5 py-3 bg-blue-600 text-white rounded-r-xl font-medium hover:bg-blue-500 transition">
            Search
          </button>
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/commons"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium
                       border border-neutral-800 text-neutral-200
                       hover:bg-neutral-900 hover:border-neutral-700 transition"
          >
            Explore Commons
          </Link>

          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium
                       bg-blue-600 text-white hover:bg-blue-500 transition"
          >
            Create account
          </Link>
        </div>
      </section>
    </main>
  );
}
