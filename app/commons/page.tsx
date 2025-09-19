import Link from "next/link";

export default function CommonsPage() {
  // demo data
  const rooms = [
    { id: "r_gnv_runners", name: "GNV Runners – Evenings", topic: "Local runs & recovery", members: 18 },
    { id: "r_coffee_chats", name: "Coffee Chats – Downtown", topic: "Meetups & tastings", members: 22 },
    { id: "r_build_in_public", name: "Build-in-Public Devs", topic: "Share progress, get feedback", members: 16 },
  ];

  const events = [
    { id: "e_cleanup_park", title: "Community Park Cleanup", when: "Sat · 9:00 AM", where: "Depot Park" },
    { id: "e_tech_coffee", title: "Tech Coffee Meetup", when: "Wed · 8:30 AM", where: "Wyatt’s Coffee" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Commons</h1>
        <p className="text-neutral-600">
          Small, local rooms and nearby happenings — never more than a few dozen people.
        </p>
      </header>

      {/* Rooms */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Suggested Rooms</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {rooms.map((r) => (
            <article key={r.id} className="rounded-2xl border border-neutral-200 p-5">
              <h3 className="font-medium">{r.name}</h3>
              <p className="text-sm text-neutral-600">{r.topic}</p>
              <p className="text-sm text-neutral-500 mt-1">{r.members} members</p>
              <div className="mt-4 flex gap-2">
                <button className="inline-flex items-center rounded-xl bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700">
                  Join
                </button>
                <Link
                  href={`/rooms/${r.id}`}
                  className="inline-flex items-center rounded-xl border border-neutral-200 px-3 py-1.5 text-sm hover:bg-neutral-50"
                >
                  Preview
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Events (can ignore for now) */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Nearby Happenings</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {events.map((e) => (
            <article key={e.id} className="rounded-2xl border border-neutral-200 p-5">
              <h3 className="font-medium">{e.title}</h3>
              <p className="text-sm text-neutral-600 mt-1">
                {e.when} · {e.where}
              </p>
              <div className="mt-4">
                <button className="inline-flex items-center rounded-xl border border-neutral-200 px-3 py-1.5 text-sm hover:bg-neutral-50">
                  Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
