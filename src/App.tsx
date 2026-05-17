import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Eager load critical initial route
import Home from './components/Home';
import AnimatedCursor from './components/AnimatedCursor';
import PageTransition from './components/PageTransition';
import AmbientBackground from './components/ui/AmbientBackground';
import './index.css';

// Lazy load the rest for performance
const Dashboard = lazy(() => import('./components/Dashboard'));
const Profile = lazy(() => import('./components/Profile'));
const Challenges = lazy(() => import('./components/Challenges'));
const Achievements = lazy(() => import('./components/Achievements'));
const ChatRoom = lazy(() => import('./components/ChatRoom'));
const SearchRoom = lazy(() => import('./components/SearchRoom'));
const CreateRoom = lazy(() => import('./components/CreateRoom'));
const Onboarding = lazy(() => import('./components/Onboarding'));

// Loading fallback for Suspense
const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 rounded-full border-2 border-primary-200 border-t-primary-600 animate-spin" />
  </div>
);

function App() {
  return (
    <div className="App min-h-screen relative font-sans">
      <AmbientBackground />
      <AnimatedCursor />
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/onboarding" element={
              <PageTransition>
                <Onboarding />
              </PageTransition>
            } />
            <Route path="/dashboard" element={
              <PageTransition>
                <Dashboard />
              </PageTransition>
            } />
            <Route path="/profile" element={
              <PageTransition>
                <Profile />
              </PageTransition>
            } />
            <Route path="/challenges" element={
              <PageTransition>
                <Challenges />
              </PageTransition>
            } />
            <Route path="/achievements" element={
              <PageTransition>
                <Achievements />
              </PageTransition>
            } />
            <Route path="/chatroom" element={
              <PageTransition>
                <ChatRoom />
              </PageTransition>
            } />
            <Route path="/search-room" element={
              <PageTransition>
                <SearchRoom />
              </PageTransition>
            } />
            <Route path="/create-room" element={
              <PageTransition>
                <CreateRoom />
              </PageTransition>
            } />
            {/* Additional routes for full functionality */}
            <Route path="/rooms" element={
              <PageTransition>
                <SearchRoom />
              </PageTransition>
            } />
            <Route path="/chat" element={
              <PageTransition>
                <ChatRoom />
              </PageTransition>
            } />
            <Route path="/wellness" element={
              <PageTransition>
                <Challenges />
              </PageTransition>
            } />
            <Route path="/daily-log" element={
              <PageTransition>
                <Dashboard />
              </PageTransition>
            } />
            <Route path="/community" element={
              <PageTransition>
                <SearchRoom />
              </PageTransition>
            } />
            {/* Redirects for common navigation patterns */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/main" element={<Navigate to="/dashboard" replace />} />
            <Route path="/search" element={<Navigate to="/search-room" replace />} />
            <Route path="/create" element={<Navigate to="/create-room" replace />} />
            <Route path="/achievement" element={<Navigate to="/achievements" replace />} />
            <Route path="/challenge" element={<Navigate to="/challenges" replace />} />
            <Route path="/user" element={<Navigate to="/profile" replace />} />
            <Route path="/account" element={<Navigate to="/profile" replace />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </div>
  );
}

export default App;
