import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import Card from './ui/Card';
import { Heart, Cloud, Sun, Wind, Leaf } from 'lucide-react';

const steps = [
  {
    id: 'welcome',
    title: "Welcome to Zuuush",
    subtitle: "A safe space for your mind. Let's personalize your experience.",
  },
  {
    id: 'feeling',
    title: "How are you feeling lately?",
    subtitle: "There are no wrong answers here.",
    options: [
      { icon: Sun, label: 'Mostly light & clear' },
      { icon: Cloud, label: 'A bit cloudy' },
      { icon: Wind, label: 'Scattered & overwhelmed' },
    ]
  },
  {
    id: 'goal',
    title: "What brings you here?",
    subtitle: "We'll tailor your dashboard to support you.",
    options: [
      { icon: Heart, label: 'Process emotions' },
      { icon: Leaf, label: 'Find daily calm' },
    ]
  }
];

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      localStorage.setItem('zuuush_onboarded', 'true');
      localStorage.setItem('zuuush_preferences', JSON.stringify(selections));
      navigate('/dashboard');
    }
  };

  const handleSelect = (optionLabel: string) => {
    setSelections({ ...selections, [steps[currentStep].id]: optionLabel });
  };

  const step = steps[currentStep];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 lg:p-12 relative">
      <Card glass className="w-full max-w-2xl p-12 md:p-16 relative overflow-hidden min-h-[600px] flex flex-col">
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/20">
          <motion.div 
            className="h-full bg-primary-400"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-primary-900 mb-4">{step.title}</h2>
              <p className="text-textSecondary text-lg mb-10">{step.subtitle}</p>

              {step.options && (
                <div className="flex flex-col gap-4 max-w-md mx-auto">
                  {step.options.map((opt, idx) => {
                    const isSelected = selections[step.id] === opt.label;
                    return (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSelect(opt.label)}
                        className={`w-full p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border
                          ${isSelected 
                            ? 'bg-primary-600 border-primary-600 text-white shadow-md' 
                            : 'bg-white/50 border-white/60 hover:bg-white text-textPrimary hover:shadow-soft'
                          }`}
                      >
                        <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/20' : 'bg-primary-50 text-primary-600'}`}>
                          <opt.icon className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-lg">{opt.label}</span>
                      </motion.button>
                    )
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pt-8 flex justify-between items-center mt-auto border-t border-black/5">
          {currentStep > 0 ? (
            <Button variant="ghost" onClick={() => setCurrentStep(currentStep - 1)}>
              Back
            </Button>
          ) : <div />}
          
          <Button 
            variant="primary" 
            onClick={handleNext}
            disabled={step.options && !selections[step.id]}
          >
            {currentStep === steps.length - 1 ? 'Enter Zuuush' : 'Continue'}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Onboarding;
