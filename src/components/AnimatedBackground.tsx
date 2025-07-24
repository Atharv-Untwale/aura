import React from 'react';

interface AnimatedBackgroundProps {
  mood?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ mood = 'default' }) => {
  const getBackgroundElements = () => {
    switch (mood) {
      case 'energetic':
        return (
          <>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-20 animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 20 + 10}px`,
                  height: `${Math.random() * 20 + 10}px`,
                  background: `linear-gradient(45deg, #ff6b35, #f7931e)`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 2 + 1}s`
                }}
              />
            ))}
          </>
        );
      case 'calm':
        return (
          <>
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-10 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 40 + 20}px`,
                  height: `${Math.random() * 40 + 20}px`,
                  background: `radial-gradient(circle, #60a5fa, #3b82f6)`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`
                }}
              />
            ))}
          </>
        );
      case 'melancholic':
        return (
          <>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-15"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: '2px',
                  height: `${Math.random() * 100 + 50}px`,
                  background: `linear-gradient(to bottom, transparent, #8b5cf6, transparent)`,
                  animation: `rain ${Math.random() * 3 + 2}s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </>
        );
      case 'happy':
        return (
          <>
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-spin opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 15 + 8}px`,
                  height: `${Math.random() * 15 + 8}px`,
                  background: `conic-gradient(from 0deg, #fbbf24, #f59e0b, #fbbf24)`,
                  borderRadius: '50%',
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 4 + 2}s`
                }}
              />
            ))}
          </>
        );
      default:
        return (
          <>
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-5 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 30 + 20}px`,
                  height: `${Math.random() * 30 + 20}px`,
                  background: `linear-gradient(135deg, #667eea, #764ba2)`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 4 + 3}s`
                }}
              />
            ))}
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {getBackgroundElements()}
    </div>
  );
};