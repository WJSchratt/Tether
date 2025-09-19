import RoomChat from "../../components/RoomChat";

type Props = { params: { id: string } };

export default function RoomPage({ params }: Props) {
  const id = decodeURIComponent(params.id);
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Room: {id}</h1>
      <RoomChat roomId={id} />
    </main>
  );
}
