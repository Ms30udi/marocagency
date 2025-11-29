import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, X, Send } from 'lucide-react';

export default function ChatbotWidget() {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: "Hi! I'm your AI assistant. How can I help you today?" },
    ]);
    const messagesEndRef = useRef();

    useEffect(() => {
        if (open && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, open]);

    const handleSend = async () => {
        if (!inputValue.trim() || isLoading) return;
        const userText = inputValue.trim();
        setMessages((msgs) => [...msgs, { from: 'user', text: userText }]);
        setInputValue('');
        setIsLoading(true);

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
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

            {/* Floating Button - Responsive placement */}
            {!open && (
                <div className="fixed bottom-8 right-4 md:bottom-6 md:right-6 z-9999 flex flex-col items-end gap-2 animate-float">
                    {/* Tooltip message */}
                    <div className="hidden sm:block bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                        How can I help you?
                    </div>
                    <button
                        onClick={() => setOpen(true)}
                        className="bg-[#092f73] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
                        aria-label="Open chatbot"
                    >
                        <Sparkles size={24} />
                    </button>
                </div>
            )}

            {/* Chatbot Window - Mobile/desktop responsive */}
            {open && (
                <div className={
                    // Mobile: full width, bottom right. Desktop: right with margin.
                    "fixed bottom-0 right-0 z-9999 w-full max-w-full h-[70vh] sm:bottom-6 sm:right-6 sm:w-[98vw] sm:max-w-md md:max-w-lg sm:h-[500px] rounded-t-xl sm:rounded-lg bg-white shadow-2xl flex flex-col overflow-hidden"
                }>
                    {/* Header */}
                    <div className="bg-[#092f73] text-white px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Sparkles size={22} />
                            <span className="font-semibold text-base sm:text-lg">AI Chatbot</span>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-white hover:text-blue-100"
                            aria-label="Close chatbot"
                        >
                            <X size={22} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto px-2 py-3 sm:px-4 sm:py-4 bg-gray-50">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} mb-2 md:mb-3`}
                            >
                                <div
                                    className={`max-w-[85vw] sm:max-w-[75%] px-3 py-2 rounded-lg text-sm sm:text-base ${msg.from === 'user'
                                            ? 'bg-[#092f73] text-white'
                                            : 'bg-gray-100 text-gray-800'
                                        }`}
                                    style={{ wordBreak: 'break-word', textTransform: 'none' }}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {/* Loading indicator */}
                        {isLoading && (
                            <div className="flex justify-start mb-3">
                                <div className="max-w-[75%] px-4 py-2 rounded-lg bg-gray-100 text-gray-800">
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-2 sm:p-4 border-t border-gray-200 flex items-center gap-2 bg-white shrink-0">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="flex-1 border-none bg-transparent focus:ring-0 focus:outline-none text-base placeholder-gray-400"
                            placeholder="Type a message..."
                            style={{ textTransform: 'none', fontSize: '1rem', minHeight: '48px' }}
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading}
                            className="text-[#092f73] hover:text-blue-800 disabled:opacity-50 shrink-0 p-2"
                            aria-label="Send message"
                            style={{ fontSize: '1.2rem' }}
                        >
                            <Send size={22} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
