import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Check, PenLine, Heart, Sparkles, SunMedium, Feather } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';
import Navigation from './Navigation';

const Dashboard: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<'morning' | 'night'>('morning');
  const [dailyLog, setDailyLog] = useState('');
  
  // Use local state, initialize from localStorage if available to feel persistent
  const [logEntries, setLogEntries] = useState<Array<{date: string, content: string, time: string}>>(() => {
    const saved = localStorage.getItem('zuuush_logs');
    if (saved) return JSON.parse(saved);
    return [
      { date: 'May 16, 2024', time: '8:30 PM', content: 'Feeling a bit lighter today. The morning walk really helped clear my mind.' },
      { date: 'May 15, 2024', time: '9:15 AM', content: 'Struggled a bit with focus, but I let it be. Tomorrow is a new day.' }
    ];
  });
  
  const [isLogSaved, setIsLogSaved] = useState(false);
  const [moodMessage, setMoodMessage] = useState('');

  // Persist logs
  useEffect(() => {
    localStorage.setItem('zuuush_logs', JSON.stringify(logEntries));
  }, [logEntries]);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        const moodData = [6, 7, 6, 8, 7, 9, selectedMood || 8];
        const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'];

        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Mood',
              data: moodData,
              borderColor: '#e6a481', // accent color
              backgroundColor: 'rgba(230, 164, 129, 0.15)',
              borderWidth: 3,
              fill: true,
              tension: 0.4,
              pointBackgroundColor: '#ffffff',
              pointBorderColor: '#e6a481',
              pointBorderWidth: 2,
              pointRadius: 5,
              pointHoverRadius: 7
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { backgroundColor: '#35433d', padding: 12, cornerRadius: 8 } },
            scales: {
              y: {
                beginAtZero: true,
                max: 10,
                ticks: { stepSize: 2, color: '#9aa6a1' },
                grid: { color: 'rgba(0,0,0,0.03)' },
                border: { display: false }
              },
              x: {
                ticks: { color: '#9aa6a1' },
                grid: { display: false },
                border: { display: false }
              }
            }
          }
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMood]);

  const handleMoodSelect = (score: number) => {
    setSelectedMood(score);
    if (score >= 8) setMoodMessage("That's wonderful to hear. Keep riding that wave.");
    else if (score >= 5) setMoodMessage("Steady and balanced. A good place to be.");
    else setMoodMessage("It's okay to have tough days. Be gentle with yourself.");
  };

  const handleSaveLog = () => {
    if (dailyLog.trim()) {
      const now = new Date();
      const newEntry = {
        date: now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        time: now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
        content: dailyLog
      };
      setLogEntries([newEntry, ...logEntries]);
      setDailyLog('');
      setIsLogSaved(true);
      setTimeout(() => setIsLogSaved(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex text-textPrimary md:pl-24 pb-24 md:pb-0">
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-12 pb-32">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 md:mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-serif text-primary-900 mb-3 leading-tight break-words">Good morning, Traveler.</h1>
          <p className="text-textSecondary text-lg md:text-xl max-w-2xl">Take a deep breath. You're exactly where you need to be.</p>
        </motion.header>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Mood & Journal */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Mood Check-in */}
            <Card glass className="relative overflow-hidden group">
              <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
                <Sun className="w-5 h-5 text-accent" /> How are you feeling right now?
              </h3>
              
              <div className="flex flex-wrap gap-2 md:justify-between items-center mb-6 overflow-x-auto hide-scrollbar pb-2">
                {[...Array(10)].map((_, i) => {
                  const score = i + 1;
                  const isSelected = selectedMood === score;
                  return (
                    <motion.button
                      key={score}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleMoodSelect(score)}
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 border
                        ${isSelected 
                          ? 'bg-accent text-white shadow-lg shadow-accent/30 scale-110 ring-4 ring-accent/20 border-accent' 
                          : 'bg-white/90 text-textPrimary border-white hover:bg-white hover:shadow-soft'}`}
                    >
                      {score}
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence>
                {moodMessage && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-primary-50 rounded-xl border border-primary-100 text-primary-800 text-sm mb-6 flex items-start gap-3">
                      <Heart className="w-4 h-4 mt-0.5 text-accent" />
                      <p>{moodMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-4">
                <Button 
                  variant={selectedTime === 'morning' ? 'primary' : 'ghost'} 
                  size="sm" 
                  onClick={() => setSelectedTime('morning')}
                  className="flex-1 gap-2 bg-primary-50 hover:bg-primary-100 text-primary-800"
                >
                  <Sun className="w-4 h-4" /> Morning
                </Button>
                <Button 
                  variant={selectedTime === 'night' ? 'primary' : 'ghost'} 
                  size="sm" 
                  onClick={() => setSelectedTime('night')}
                  className="flex-1 gap-2 bg-primary-50 hover:bg-primary-100 text-primary-800"
                >
                  <Moon className="w-4 h-4" /> Night
                </Button>
              </div>
            </Card>

            {/* Daily Reflection */}
            <Card className="flex flex-col min-h-[350px]">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <PenLine className="w-5 h-5 text-accent" /> Daily Reflection
              </h3>
              <textarea 
                value={dailyLog}
                onChange={(e) => setDailyLog(e.target.value)}
                placeholder="What's taking up space in your mind right now? Let it out..." 
                className="flex-1 w-full p-6 rounded-2xl bg-white/80 border border-black/10 shadow-inner-soft focus:border-primary-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-100/40 transition-all resize-none text-textPrimary placeholder:text-textSecondary/70 text-lg leading-relaxed"
              />
              <div className="mt-4 flex justify-end items-center gap-4">
                <AnimatePresence>
                  {isLogSaved && (
                    <motion.span 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm font-medium text-primary-600 flex items-center gap-1.5"
                    >
                      <Check className="w-4 h-4" /> Saved locally
                    </motion.span>
                  )}
                </AnimatePresence>
                <Button onClick={handleSaveLog} disabled={!dailyLog.trim()} variant="primary" className="shadow-lg shadow-primary-600/20">
                  Save Entry
                </Button>
              </div>
            </Card>

            {/* Journal History */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-serif text-primary-900 mb-4">Past Thoughts</h3>
              {logEntries.map((entry, i) => (
                <motion.div 
                  key={`${entry.date}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card glass className="p-6 hover:shadow-deep transition-all duration-300 border-l-4 border-l-accent border-y-white/40 border-r-white/40">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-primary-700">{entry.date}</span>
                      <span className="text-xs text-textMuted">{entry.time}</span>
                    </div>
                    <p className="text-textSecondary leading-relaxed whitespace-pre-wrap break-words">{entry.content}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Chart & Stats */}
          <div className="space-y-12">
            
            {/* Streak Card */}
            <Card className="bg-primary-600 text-textPrimary border-none shadow-xl shadow-primary-600/20 overflow-hidden relative">
              <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/40 rounded-full blur-2xl" />
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/50 backdrop-blur-md flex items-center justify-center shadow-inner-soft">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold mb-1">4</div>
                  <div className="text-primary-800 font-medium tracking-wide text-sm">Day Check-in Streak</div>
                </div>
              </div>
            </Card>

            {/* Chart */}
            <Card glass>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium">Emotional Landscape</h3>
              </div>
              <div className="h-48 w-full">
                <canvas ref={chartRef}></canvas>
              </div>
            </Card>

            {/* Recommendations */}
            <Card>
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" /> Recommended for you
              </h3>
              <div className="space-y-3">
                <Link to="/rooms" className="block p-4 rounded-2xl bg-secondary-light hover:bg-[#ebdceb] transition-colors border border-secondary-DEFAULT/20 group">
                  <div className="flex items-center gap-3 mb-1">
                    <SunMedium className="w-5 h-5 text-secondary-dark" />
                    <span className="font-medium text-primary-900 group-hover:text-black">Morning Intentions Room</span>
                  </div>
                  <p className="text-sm text-textSecondary ml-8">Join 12 others in setting calm intentions for the day.</p>
                </Link>
                
                <Link to="/challenges" className="block p-4 rounded-2xl bg-accent-light/50 hover:bg-accent-light transition-colors border border-accent/20 group">
                  <div className="flex items-center gap-3 mb-1">
                    <Feather className="w-5 h-5 text-accent-dark" />
                    <span className="font-medium text-primary-900 group-hover:text-black">Anxiety Grounding Exercise</span>
                  </div>
                  <p className="text-sm text-textSecondary ml-8">A 5-minute guided audio to bring you back to the present.</p>
                </Link>
              </div>
            </Card>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;