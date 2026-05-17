import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowLeft, Heart } from 'lucide-react';
import Card from './ui/Card';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: string;
}

const initialMessages: Message[] = [
  { id: '1', text: 'Hello. This is a safe, guided space. What is on your mind today?', isBot: true, timestamp: '10:00 AM' }
];

const botResponses = [
  "I hear you. It's completely valid to feel that way.",
  "Take a deep breath. You don't have to figure it all out right now.",
  "That sounds really heavy. Be gentle with yourself today.",
  "Thank you for sharing that. It takes courage to put it into words.",
];

const ChatRoom: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Simulate natural typing delay
  };

  return (
    <div className="min-h-screen flex text-textPrimary bg-background/50">
      <main className="flex-1 max-w-3xl mx-auto w-full h-screen flex flex-col relative">
        
        {/* Chat Header */}
        <header className="px-6 py-4 flex items-center gap-4 bg-surfaceGlass backdrop-blur-xl border-b border-white/40 sticky top-0 z-10">
          <Link to="/rooms" className="p-2 rounded-full hover:bg-black/5 transition-colors text-textSecondary">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h2 className="text-lg font-medium text-primary-900">Guided Space</h2>
            <p className="text-xs text-primary-600 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Zuuush Guide active
            </p>
          </div>
          <button className="p-2 text-accent-dark hover:bg-accent-light rounded-full transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex flex-col ${msg.isBot ? 'items-start' : 'items-end'}`}
              >
                <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                  msg.isBot 
                    ? 'bg-white border border-white/60 text-textPrimary rounded-tl-sm shadow-soft' 
                    : 'bg-primary-600 text-white rounded-tr-sm shadow-md'
                }`}>
                  <p className="leading-relaxed whitespace-pre-wrap break-words">{msg.text}</p>
                </div>
                <span className="text-[10px] text-textMuted mt-1 px-1">{msg.timestamp}</span>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-start"
              >
                <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl rounded-tl-sm p-4 shadow-soft flex gap-1">
                  <motion.span className="w-2 h-2 rounded-full bg-primary-400" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                  <motion.span className="w-2 h-2 rounded-full bg-primary-400" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                  <motion.span className="w-2 h-2 rounded-full bg-primary-400" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={bottomRef} />
        </div>

        {/* Chat Input */}
        <div className="p-8 bg-background">
          <Card glass className="p-3 rounded-full flex items-center gap-2 pr-3">
            <form onSubmit={handleSend} className="flex-1 flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your thoughts..."
                className="flex-1 bg-transparent border-none focus:ring-0 px-6 py-3 text-textPrimary placeholder:text-textMuted outline-none text-lg"
              />
              <button 
                type="submit" 
                disabled={!input.trim()}
                className={`p-4 rounded-full flex items-center justify-center transition-all ${
                  input.trim() ? 'bg-primary-600 text-white shadow-md hover:bg-primary-500' : 'bg-black/5 text-textMuted cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5 ml-0.5" />
              </button>
            </form>
          </Card>
        </div>

      </main>
    </div>
  );
};

export default ChatRoom;