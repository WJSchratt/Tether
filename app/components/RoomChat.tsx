'use client';

import { useEffect, useRef, useState } from "react";

type Message = { id: string; author: string; text: string; ts: number };

export default function RoomChat({ roomId }: { roomId: string }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: "m1", author: "system", text: `Welcome to ${roomId}!`, ts: Date.now() },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);

  // auto-scroll to the newest message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  function send(text: string) {
    const t = text.trim();
    if (!t) return;
    setMessages(prev => [
      ...prev,
      { id: crypto.randomUUID(), author: "you", text: t, ts: Date.now() },
    ]);
    setInput("");
  }

  return (
    <section className="grid h-[60vh] grid-rows-[1fr_auto] rounded-2xl border border-neutral-200">
      {/* messages */}
      <div className="overflow-y-auto p-3 text-sm">
        {messages.map(m => (
          <div key={m.id} className="mb-2">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold">{m.author}</span>
              <span className="text-xs text-neutral-500">
                {new Date(m.ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
            <p className="whitespace-pre-wrap">{m.text}</p>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* input */}
      <form
        className="flex gap-2 border-t border-neutral-200 p-3"
        onSubmit={(e) => { e.preventDefault(); send(input); }}
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            // Enter sends; Shift+Enter makes a newline
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send(input);
            }
          }}
          placeholder="Type a message…"
          className="min-h-[44px] max-h-40 flex-1 resize-y rounded-xl border border-neutral-300 px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </section>
  );
}
