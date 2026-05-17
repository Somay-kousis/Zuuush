import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, LogOut } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';

import Navigation from './Navigation';

const Toggle = ({ active, onToggle }: { active: boolean, onToggle: () => void }) => (
  <button 
    onClick={onToggle}
    className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${active ? 'bg-primary-600' : 'bg-black/10'}`}
  >
    <motion.div 
      className="w-4 h-4 bg-white rounded-full shadow-sm"
      animate={{ x: active ? 24 : 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  </button>
);

const Profile: React.FC = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    quietMode: false,
    darkMode: false,
    privateProfile: true
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen flex text-textPrimary md:pl-24 pb-24 md:pb-0">
      <Navigation />

      <main className="flex-1 max-w-4xl mx-auto px-6 md:px-8 py-10 md:py-12 pb-32">
        <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-primary-900 mb-3">Settings</h1>
            <p className="text-textSecondary text-lg">Manage your space and preferences.</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 shadow-inner-soft">
            <User className="w-8 h-8" />
          </div>
        </motion.header>

        <div className="space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card glass className="p-0 overflow-hidden">
              <div className="p-8 border-b border-black/5 bg-white/40">
                <h3 className="text-xl font-medium flex items-center gap-3"><Bell className="w-6 h-6 text-accent" /> Notifications</h3>
              </div>
              <div className="p-8 space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium mb-1">Daily Reminders</div>
                    <div className="text-sm text-textSecondary">Gentle nudges to check in with yourself.</div>
                  </div>
                  <Toggle active={settings.notifications} onToggle={() => toggle('notifications')} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium mb-1">Quiet Mode</div>
                    <div className="text-sm text-textSecondary">Mute all notifications from 10 PM to 8 AM.</div>
                  </div>
                  <Toggle active={settings.quietMode} onToggle={() => toggle('quietMode')} />
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card glass className="p-0 overflow-hidden">
              <div className="p-8 border-b border-black/5 bg-white/40">
                <h3 className="text-xl font-medium flex items-center gap-3"><Shield className="w-6 h-6 text-primary-600" /> Privacy</h3>
              </div>
              <div className="p-8 space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium mb-1">Private Profile</div>
                    <div className="text-sm text-textSecondary">Hide your check-in streak from community rooms.</div>
                  </div>
                  <Toggle active={settings.privateProfile} onToggle={() => toggle('privateProfile')} />
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="pt-8">
            <Button variant="ghost" className="text-red-500 hover:bg-red-50 hover:text-red-600 gap-2">
              <LogOut className="w-4 h-4" /> Sign Out
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Profile;