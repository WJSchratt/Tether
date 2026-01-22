import Link from "next/link";

export default function CommonsPage() {
  // Demo data
  const userInterestRooms = [
    { id: "r_gaming_legends", name: "Gaming Legends", topic: "Online gaming & tournaments", members: 30 },
    { id: "r_build_in_public", name: "Build-in-Public Devs", topic: "Share progress, get feedback", members: 16 },
  ];

  const nearbyRooms = [
    { id: "r_gnv_runners", name: "GNV Runners – Evenings", topic: "Local runs & recovery", members: 18 },
    { id: "r_coffee_chats", name: "Coffee Chats – Downtown", topic: "Meetups & tastings", members: 22 },
  ];

  const onlineRooms = [
    { id: "r_sports_fanatics", name: "Sports Fanatics", topic: "Discussion & live streams", members: 25 },
  ];

  const events = [
    { id: "e_cleanup_park", title: "Community Park Cleanup", when: "Sat · 9:00 AM", where: "Depot Park" },
    { id: "e_tech_coffee", title: "Tech Coffee Meetup", when: "Wed · 8:30 AM", where: "Wyatt’s Coffee" },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-16">
      {/* Hero */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-100 mb-2">Welcome to the <span className="text-blue-500 font-bold">Commons</span></h1>
        <p className="text-neutral-400 max-w-xl mx-auto text-lg">
          Find Community <span className="text-blue-500 font-semibold">Anywhere</span> <span className="text-blue-500 font-semibold">Anytime</span>
        </p>
      </header>

      {/* Based on Your Interests Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-100">Based on Your Interests</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {userInterestRooms.map((r) => (
            <Link
              key={r.id}
              href={`/rooms/${r.id}`}
              className="block rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:bg-blue-950 transition"
            >
              <h3 className="font-medium text-neutral-100 hover:text-blue-500">{r.name}</h3>
              <p className="text-sm text-neutral-400">{r.topic}</p>
              <p className="text-sm text-blue-400 mt-1">{r.members} members</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Nearby Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-100">Nearby</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {nearbyRooms.map((r) => (
            <Link
              key={r.id}
              href={`/rooms/${r.id}`}
              className="block rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:bg-blue-950 transition"
            >
              <h3 className="font-medium text-neutral-100 hover:text-blue-500">{r.name}</h3>
              <p className="text-sm text-neutral-400">{r.topic}</p>
              <p className="text-sm text-blue-400 mt-1">{r.members} members</p>
            </Link>
          ))}
        </div>
      </section>

      {/* World Wide Web Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-100">World Wide Web</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {onlineRooms.map((r) => (
            <Link
              key={r.id}
              href={`/rooms/${r.id}`}
              className="block rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:bg-blue-950 transition"
            >
              <h3 className="font-medium text-neutral-100 hover:text-blue-500">{r.name}</h3>
              <p className="text-sm text-neutral-400">{r.topic}</p>
              <p className="text-sm text-blue-400 mt-1">{r.members} members</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
