import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-16">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
        <h1 className="text-2xl font-semibold text-neutral-100">
          Sign up
        </h1>

        <p className="mt-1 text-sm text-neutral-400">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>

        <form className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm text-neutral-300">Email</span>
            <input
              type="email"
              className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800
                         px-3 py-2 text-neutral-100 placeholder:text-neutral-500
                         focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="you@example.com"
            />
          </label>

          <label className="block">
            <span className="text-sm text-neutral-300">Password</span>
            <input
              type="password"
              className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800
                         px-3 py-2 text-neutral-100 placeholder:text-neutral-500
                         focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="••••••••"
            />
          </label>

          <button
            type="button"
            className="w-full rounded-xl bg-blue-600 px-4 py-2.5
                       text-sm font-medium text-white
                       hover:bg-blue-500 transition"
          >
            Create account
          </button>
        </form>
      </div>
    </main>
  );
}
