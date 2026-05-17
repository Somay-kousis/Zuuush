import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, LayoutDashboard, Plus, Lock, Globe } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';
import Navigation from './Navigation';
import Input from './ui/Input';

const CreateRoom: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isPrivate, setIsPrivate] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => setStep(2);
  const handleCreate = () => {
    // Mock create room action
    navigate('/rooms');
  };

  return (
    <div className="min-h-screen flex text-textPrimary md:pl-24 pb-24 md:pb-0">
      <Navigation />

      <main className="flex-1 max-w-2xl mx-auto px-6 md:px-8 py-10 md:py-20 pb-32">
        <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 mx-auto mb-6 shadow-inner-soft">
            <Plus className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-serif text-primary-900 mb-3">Create a Space</h1>
          <p className="text-textSecondary text-lg">Build a safe environment for your community.</p>
        </motion.header>

        <Card glass className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-white/20">
            <motion.div 
              className="h-full bg-accent"
              animate={{ width: step === 1 ? '50%' : '100%' }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          <div className="p-6 md:p-10 pt-8">
            {step === 1 ? (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                <h3 className="text-2xl font-medium mb-8">What is this space about?</h3>
                <div className="space-y-8">
                  <Input label="Room Name" placeholder="e.g. Mindful Mornings" />
                  <Input label="Description (Optional)" placeholder="What's the intention behind this room?" />
                  <Button onClick={handleNext} className="w-full mt-6 py-4 text-lg" variant="primary">Continue</Button>
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h3 className="text-2xl font-medium mb-8">Space Settings</h3>
                <div className="space-y-6 mb-10">
                  <button 
                    onClick={() => setIsPrivate(false)}
                    className={`w-full p-6 rounded-3xl border text-left flex items-start gap-5 transition-all duration-300 ${!isPrivate ? 'bg-primary-50 border-primary-200 shadow-soft' : 'bg-white/50 border-white/60 hover:bg-white'}`}
                  >
                    <Globe className={`w-6 h-6 mt-0.5 ${!isPrivate ? 'text-primary-600' : 'text-textSecondary'}`} />
                    <div>
                      <div className="font-medium">Public Space</div>
                      <div className="text-sm text-textSecondary">Anyone can find and join this room.</div>
                    </div>
                  </button>

                  <button 
                    onClick={() => setIsPrivate(true)}
                    className={`w-full p-6 rounded-3xl border text-left flex items-start gap-5 transition-all duration-300 ${isPrivate ? 'bg-primary-50 border-primary-200 shadow-soft' : 'bg-white/50 border-white/60 hover:bg-white'}`}
                  >
                    <Lock className={`w-6 h-6 mt-0.5 ${isPrivate ? 'text-primary-600' : 'text-textSecondary'}`} />
                    <div>
                      <div className="font-medium">Private Space</div>
                      <div className="text-sm text-textSecondary">Only people with an invite link can join.</div>
                    </div>
                  </button>
                </div>
                
                <div className="flex gap-4">
                  <Button onClick={() => setStep(1)} variant="ghost" className="flex-1">Back</Button>
                  <Button onClick={handleCreate} variant="primary" className="flex-1 shadow-md shadow-primary-600/20">Create Room</Button>
                </div>
              </motion.div>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default CreateRoom;