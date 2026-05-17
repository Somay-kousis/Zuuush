import React from 'react';
import Card from './ui/Card';
import Navigation from './Navigation';

const Achievements: React.FC = () => {
  return (
    <div className="min-h-screen flex text-textPrimary md:pl-24 pb-24 md:pb-0">
      <Navigation />
      <main className="flex-1 max-w-3xl mx-auto px-6 md:px-8 py-10 md:py-20 text-center pb-32">
        <h1 className="text-4xl font-serif text-primary-900 mb-6">Achievements</h1>
        <Card>
          <p className="text-textSecondary">Every small step is an achievement. Your journey will be tracked here.</p>
        </Card>
      </main>
    </div>
  );
};

export default Achievements;