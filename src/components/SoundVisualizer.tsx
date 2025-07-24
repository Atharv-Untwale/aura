import React, { useEffect, useState } from 'react';

interface SoundVisualizerProps {
  isActive: boolean;
  mood: string;
}

export const SoundVisualizer: React.FC<SoundVisualizerProps> = ({ isActive, mood }) => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setBars(Array.from({ length: 20 }, () => Math.random() * 100));
    }, 150);

    return () => clearInterval(interval);
  }, [isActive]);

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'energetic': return 'from-orange-500 to-red-500';
      case 'calm': return 'from-blue-400 to-cyan-400';
      case 'melancholic': return 'from-purple-500 to-indigo-600';
      case 'happy': return 'from-yellow-400 to-orange-400';
      default: return 'from-purple-500 to-indigo-500';
    }
  };

  if (!isActive) return null;

  return (
    <div className="flex items-end justify-center space-x-1 h-16 mb-4">
      {bars.map((height, index) => (
        <div
          key={index}
          className={`w-2 bg-gradient-to-t ${getMoodColor(mood)} rounded-t-full transition-all duration-150 ease-out`}
          style={{ height: `${Math.max(height, 10)}%` }}
        />
      ))}
    </div>
  );
};