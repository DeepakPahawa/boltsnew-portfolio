"use client";
import { useState } from "react";

export function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    setMessages((prev) => [...prev, `🧑‍💼: ${input}`]);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ question: input }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setMessages((prev) => [...prev, `🤖: ${data.answer}`]);
    setInput("");
  }

  return (
    <div>
      <h1>Recruiter Chatbot</h1>
      <div>
        {messages.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button type="submit">Ask</button>
      </form>
    </div>
  );
}
