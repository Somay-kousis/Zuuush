import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Search, Moon, Sun, Cloud, Lock, Feather } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';
import Navigation from './Navigation';

const mockRooms = [
  { id: 1, name: 'Morning Intentions', icon: Sun, members: 12, topic: 'Mindfulness', color: 'bg-accent-light text-accent-dark' },
  { id: 2, name: 'Late Night Thoughts', icon: Moon, members: 8, topic: 'Processing', color: 'bg-primary-100 text-primary-700' },
  { id: 3, name: 'Anxiety Support', icon: Cloud, members: 24, topic: 'Support', color: 'bg-secondary-light text-secondary-dark' },
  { id: 4, name: 'Creative Flow', icon: Feather, members: 5, topic: 'Productivity', color: 'bg-white/80 text-textSecondary' },
];

const SearchRoom: React.FC = () => {
  return (
    <div className="min-h-screen flex text-textPrimary md:pl-24 pb-24 md:pb-0">
      <Navigation />

      <main className="flex-1 max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-12 pb-32">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-primary-900 mb-3">Explore Spaces</h1>
          <p className="text-textSecondary text-lg max-w-2xl">Find a safe room that resonates with what you're feeling today.</p>
        </motion.div>

        <div className="mb-10 max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-textMuted w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by feeling, topic, or room name..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/60 border border-white/40 shadow-inner-soft focus:border-primary-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-100/50 transition-all text-textPrimary placeholder:text-textMuted"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {mockRooms.map((room, i) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card glass className="h-full flex flex-col p-8 group hover:-translate-y-1 hover:shadow-deep transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${room.color}`}>
                    <room.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 bg-white/50 rounded-full border border-black/5 text-textSecondary">
                    {room.topic}
                  </span>
                </div>
                
                <h3 className="text-xl font-medium mb-1">{room.name}</h3>
                <p className="text-textSecondary text-sm mb-6 flex items-center gap-1.5">
                  <Users className="w-4 h-4" /> {room.members} sharing space
                </p>
                
                <div className="mt-auto pt-4 border-t border-black/5">
                  <Link to="/chat">
                    <Button variant="ghost" className="w-full justify-between group-hover:bg-primary-50 group-hover:text-primary-800">
                      Join Room
                      <motion.span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        →
                      </motion.span>
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}

          {/* Locked/Premium Room Mock */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card glass className="h-full flex flex-col p-8 opacity-75 grayscale-[20%]">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gray-200 text-gray-500">
                  <Lock className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1">Guided Therapy</h3>
              <p className="text-textSecondary text-sm mb-6">Expert-led small group.</p>
              <div className="mt-auto pt-4 border-t border-black/5">
                <Button variant="ghost" className="w-full text-textMuted cursor-not-allowed">
                  Unlock with Zuuush+
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default SearchRoom;