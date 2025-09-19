import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-md rounded-2xl border border-neutral-200 p-6">
        <h1 className="text-2xl font-semibold">Sign up</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Already have an account? <Link href="/login" className="underline">Log in</Link>
        </p>

        <form className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm">Email</span>
            <input
              type="email"
              className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
              placeholder="you@example.com"
            />
          </label>

          <label className="block">
            <span className="text-sm">Password</span>
            <input
              type="password"
              className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2"
              placeholder="••••••••"
            />
          </label>

          <button
            type="button"
            className="w-full rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Create account
          </button>
        </form>
      </div>
    </main>
  );
}
