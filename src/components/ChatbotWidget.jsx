import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, X, Send } from 'lucide-react';

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm your AI assistant. How can I help you today?" },
  ]);
  const messagesEndRef = useRef();

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userText = inputValue.trim();
    setMessages((msgs) => [...msgs, { from: 'user', text: userText }]);
    setInputValue('');

    // Show "typing..." or spinner if desired
    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { from: "bot", text: data.reply }]);
    } catch {
      setMessages((msgs) => [...msgs, { from: "bot", text: "Sorry, I couldn't connect to the AI." }]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed bottom-6 right-6 z-50 
            bg-[#092f73] 
            text-white
            hover:text-white
            rounded-full 
            p-4 
            shadow-lg 
            hover:shadow-xl 
            transition-colors transition-shadow duration-300 
            cursor-pointer
          "
          aria-label="Open chatbot"
        >
          <Sparkles className="w-8 h-8 text-blue-400" />
        </button>
      )}

      {/* Chatbot Window */}
      {open && (
        <div
          className={`
            fixed bottom-2 right-2 z-40 
            w-[95vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
            h-[70vh] max-h-[450px] 
            sm:h-[450px] md:h-[550px] lg:h-[600px]
            flex flex-col bg-white border border-blue-200 shadow-2xl rounded-2xl animate-fade-in
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#092f73] rounded-t-2xl">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-blue-100" />
              <span className="text-white font-bold text-base">AI chatbot</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:text-blue-100"
              aria-label="Close chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-4 py-3 bg-blue-50"
            style={{ minHeight: 0 }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`px-3 py-2 rounded-lg text-sm max-w-[75%] shadow ${
                    msg.from === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-blue-100 text-gray-800'
                  }`}
                  style={{ textTransform: 'none' }} // Ensures no forced casing
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex items-center border-t border-gray-200 px-4 py-2 bg-white rounded-b-2xl"
          >
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              className="flex-1 border-none bg-transparent focus:ring-0 focus:outline-none text-sm placeholder-gray-400"
              placeholder="Type a message..."
              autoFocus
              style={{ textTransform: 'none' }} // Ensures user's input is natural case
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="ml-2 text-[#092f73] hover:text-blue-700 disabled:opacity-50"
              aria-label="Send"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
