import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

function botReply(userText) {
  const text = userText.toLowerCase();
  if (/(everest|ebc|trek)/.test(text)) {
    return "Everest Base Camp treks typically take 12–14 days. Best seasons: Mar–May and Sep–Nov. We can tailor acclimatization days for you.";
  }
  if (/(visa|entry|requirements)/.test(text)) {
    return "Most travelers can obtain a visa on arrival at Tribhuvan International Airport. Bring a passport photo and USD cash or card.";
  }
  if (/(weather|best time)/.test(text)) {
    return "For clear mountain views, visit in spring (Mar–May) or autumn (Sep–Nov). Winter is colder but quieter; monsoon is lush but cloudy.";
  }
  if (/(guide|local|support)/.test(text)) {
    return "All our trips include certified local guides and 24/7 support via phone and WhatsApp.";
  }
  if (/(price|cost|budget)/.test(text)) {
    return "Packages vary by season and customization. Share dates and group size, and I’ll prepare a quick quote.";
  }
  return "I’m here to help with destinations, packages, seasons, and logistics. Ask me about treks, visas, safaris, culture, or request a custom itinerary!";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => [
    { id: 1, role: "bot", text: "Hi! I’m your NepalExplore assistant. How can I help you plan your trip?" },
  ]);
  const listRef = useRef(null);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  function handleSend() {
    if (!canSend) return;
    const text = input.trim();
    const userMsg = { id: Date.now(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      const reply = botReply(text);
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "bot", text: reply }]);
    }, 450);
  }

  return (
    <div>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-[#1E90FF] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow inline-flex items-center gap-2"
          aria-label="Open chat"
        >
          <MessageCircle className="w-5 h-5" /> Chat with us
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[320px] sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-[#1E90FF] to-[#A0522D] text-white px-4 py-3 flex items-center justify-between">
            <div>
              <p className="font-semibold">NepalExplore Assistant</p>
              <p className="text-xs text-white/90">Online • 24/7 support</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="p-1 rounded hover:bg-white/20">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div ref={listRef} className="h-64 overflow-y-auto p-3 space-y-2 bg-gradient-to-b from-white to-[#f8fafc]">
            {messages.map((m) => (
              <div key={m.id} className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${m.role === "bot" ? "bg-[#f1f5ff] text-gray-800" : "bg-[#1E90FF] text-white ml-auto"}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t bg-white flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about treks, visas, seasons..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/50"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button
              onClick={handleSend}
              disabled={!canSend}
              className="inline-flex items-center justify-center bg-[#1E90FF] disabled:opacity-50 text-white rounded-lg px-3 py-2"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
