import React from 'react';

const AmbientBackground: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-background" />
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-secondary-light mix-blend-multiply filter blur-[120px] animate-breath" style={{ animationDelay: '0s', willChange: 'transform, opacity', transform: 'translateZ(0)' }} />
        <div className="absolute top-[10%] right-[-15%] w-[50%] h-[50%] rounded-full bg-accent-light mix-blend-multiply filter blur-[140px] animate-breath" style={{ animationDelay: '3s', willChange: 'transform, opacity', transform: 'translateZ(0)' }} />
        <div className="absolute bottom-[-20%] left-[10%] w-[70%] h-[70%] rounded-full bg-primary-100/60 mix-blend-multiply filter blur-[150px] animate-breath" style={{ animationDelay: '6s', willChange: 'transform, opacity', transform: 'translateZ(0)' }} />
      </div>
      {/* Ultra-premium light grain overlay for cinematic texture, hardware accelerated */}
      <div className="fixed inset-0 z-[-1] opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")', transform: 'translateZ(0)' }} />
    </>
  );
};

export default AmbientBackground;
