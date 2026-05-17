import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import Button from './ui/Button';
import Card from './ui/Card';
import Input from './ui/Input';

// Note: Ensure the image imports are correct based on the actual path in the repo.
// We'll use lucide icons if the images are missing.
import { ArrowRight, MessageCircle, Send, Leaf, Cloud, Feather } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden text-textPrimary">
      
      {/* Navigation Layer */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-primary-600/10 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-700" />
            </div>
            <span className="font-serif font-semibold text-2xl tracking-widest text-primary-900">ZUUUSH</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/dashboard">
              <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20">
        
        {/* Floating 3D Artwork */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-auto opacity-60 mix-blend-multiply pointer-events-none -z-10"
          animate={{
            y: ['-50%', '-55%', '-50%'],
            rotate: [0, 2, 0, -2, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src="/wind-art.png" 
            alt="Soothing Abstract Wind" 
            className="w-full h-full object-contain opacity-80"
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto flex flex-col items-center relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-10 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/40 border border-white/60 shadow-sm text-sm text-primary-800 tracking-wide">
            <Cloud className="w-4 h-4" />
            <span>A safe space for your mind</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-primary-900 leading-tight mb-12 tracking-tight break-words hyphens-auto"
          >
            Breathe in.<br/>
            <span className="text-primary-400 italic">Breathe out.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-textSecondary max-w-2xl mx-auto leading-loose mb-16 font-light"
          >
            No fancy promises here. Just a space where your thoughts don't have to make perfect sense. Show up exactly as you are.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link to="/onboarding">
              <Button size="lg" className="w-full sm:w-auto gap-2 group">
                Begin Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="py-40 px-6 bg-white/20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-24 px-4"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary-900 mb-6 leading-tight break-words">Emotional wellbeing,<br/>un-complicated.</h2>
            <p className="text-xl text-textSecondary max-w-xl mx-auto leading-loose font-light">Tools that work with how people actually think and feel.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <Card glass className="p-10">
              <div className="w-16 h-16 rounded-3xl bg-accent-light/50 flex items-center justify-center mb-8 text-accent-dark shadow-inner-soft">
                <Feather className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Daily Reflection</h3>
              <p className="text-textSecondary leading-loose text-lg font-light">
                A private journal to let your thoughts flow without judgment.
              </p>
            </Card>

            <Card glass className="p-10">
              <div className="w-16 h-16 rounded-3xl bg-primary-100 flex items-center justify-center mb-8 text-primary-700 shadow-inner-soft">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Community Rooms</h3>
              <p className="text-textSecondary leading-loose text-lg font-light">
                Connect with others traversing similar paths in safe, moderated spaces.
              </p>
            </Card>

            <Card glass className="p-10">
              <div className="w-16 h-16 rounded-3xl bg-white/60 flex items-center justify-center mb-8 text-secondary-dark shadow-inner-soft">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-medium mb-4">Mood Tracking</h3>
              <p className="text-textSecondary leading-loose text-lg font-light">
                Gently observe your emotional patterns without the pressure of metrics.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Card glass className="p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/50 rounded-full mix-blend-multiply filter blur-3xl" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif text-primary-900 mb-4">We actually read these</h2>
                <p className="text-textSecondary leading-relaxed mb-6">
                  Have an idea? Just want to tell us this helped? We're real people who check our messages. No copy-paste responses.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <textarea 
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-black/5 focus:border-primary-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-100/50 transition-all placeholder:text-textMuted text-textPrimary resize-none"
                  placeholder="Your Message"
                  rows={3}
                ></textarea>
                <Button className="w-full justify-between group">
                  Send Note
                  <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default Home;
