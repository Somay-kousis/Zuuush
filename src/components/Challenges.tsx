import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';
import Navigation from './Navigation';

const mockChallenges = [
  { id: 1, title: '7 Days of Gratitude', description: 'Find one small thing to be grateful for every day.', progress: 3, total: 7, color: 'bg-accent text-white' },
  { id: 2, title: 'Digital Detox Evening', description: 'No screens 2 hours before bed.', progress: 1, total: 3, color: 'bg-primary-600 text-white' },
  { id: 3, title: 'Mindful Breathing', description: '5 minutes of focused breathing daily.', progress: 0, total: 5, color: 'bg-secondary-dark text-white' },
];

const Challenges: React.FC = () => {
  const [challenges, setChallenges] = useState(mockChallenges);

  const handleProgress = (id: number) => {
    setChallenges(challenges.map(c => 
      c.id === id && c.progress < c.total ? { ...c, progress: c.progress + 1 } : c
    ));
  };

  return (
    <div className="min-h-screen flex text-textPrimary md:pl-24 pb-24 md:pb-0">
      <Navigation />

      <main className="flex-1 max-w-4xl mx-auto px-6 md:px-8 py-10 md:py-12 pb-32">
        <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-primary-900 mb-3">Your Challenges</h1>
          <p className="text-textSecondary text-lg max-w-2xl">Gentle steps towards a healthier mind. No pressure, just progress.</p>
        </motion.header>

        <div className="space-y-10">
          {challenges.map((challenge, i) => {
            const isComplete = challenge.progress === challenge.total;
            return (
              <motion.div key={challenge.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                <Card glass className={`relative overflow-hidden p-8 ${isComplete ? 'opacity-80' : ''}`}>
                  <div className={`absolute top-0 left-0 w-2 h-full ${challenge.color}`} />
                  <div className="pl-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-medium mb-1 flex items-center gap-2">
                        {isComplete && <CheckCircle className="w-5 h-5 text-primary-500" />}
                        {challenge.title}
                      </h3>
                      <p className="text-textSecondary">{challenge.description}</p>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-sm font-medium text-textSecondary mb-1">
                          {challenge.progress} / {challenge.total} days
                        </div>
                        <div className="w-32 h-2 bg-black/5 rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full ${challenge.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                      
                      <Button 
                        variant={isComplete ? "ghost" : "secondary"} 
                        onClick={() => handleProgress(challenge.id)}
                        disabled={isComplete}
                        className={isComplete ? "text-primary-500" : ""}
                      >
                        {isComplete ? 'Completed' : 'Check In'}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </main>
    </div>
  );
};

export default Challenges;