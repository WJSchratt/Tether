import RoomChat from "../../components/RoomChat";
import Link from "next/link";

type Props = { params: { id: string } };

export default function RoomPage({ params }: Props) {
  const id = decodeURIComponent(params.id);

  return (
    <main className="min-h-screen bg-neutral-950 px-4 pt-16 pb-24 flex flex-col">
      {/* Top Room Name */}
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-neutral-100 px-4 py-2">
          Room: {id}
        </h1>
      </header>

      {/* Chat area fills remaining space */}
      <div className="flex-1">
        <RoomChat roomId={id} />
      </div>

      {/* Fixed "Back to Commons" button at the bottom */}
      <footer className="fixed bottom-4 left-0 w-full flex justify-center">
        <Link
          href="/commons"
          className="rounded-lg bg-neutral-800 px-6 py-3 text-neutral-100 hover:bg-neutral-700 transition shadow-lg"
        >
          Back to Commons
        </Link>
      </footer>
    </main>
  );
}
