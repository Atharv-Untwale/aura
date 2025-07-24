import React from 'react';
import { Zap, Moon, Cloud, Sun } from 'lucide-react';

interface MoodMeterProps {
  scores: {
    energetic: number;
    calm: number;
    melancholic: number;
    happy: number;
  };
}

export const MoodMeter: React.FC<MoodMeterProps> = ({ scores }) => {
  const maxScore = Math.max(...Object.values(scores));
  
  const moodData = [
    { 
      key: 'energetic', 
      label: 'Energetic', 
      icon: Zap, 
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-700'
    },
    { 
      key: 'calm', 
      label: 'Calm', 
      icon: Moon, 
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700'
    },
    { 
      key: 'melancholic', 
      label: 'Reflective', 
      icon: Cloud, 
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700'
    },
    { 
      key: 'happy', 
      label: 'Happy', 
      icon: Sun, 
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-700'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Your Mood Analysis</h3>
      
      <div className="space-y-4">
        {moodData.map(({ key, label, icon: Icon, color, bgColor, textColor }) => {
          const score = scores[key as keyof typeof scores];
          const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
          const isHighest = score === maxScore && maxScore > 0;
          
          return (
            <div key={key} className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg ${bgColor}`}>
                    <Icon className={`w-4 h-4 ${textColor}`} />
                  </div>
                  <span className={`font-medium ${isHighest ? 'text-gray-800' : 'text-gray-600'}`}>
                    {label}
                  </span>
                </div>
                <span className={`text-sm font-semibold ${isHighest ? 'text-gray-800' : 'text-gray-500'}`}>
                  {score}
                </span>
              </div>
              
              <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out ${
                    isHighest ? 'animate-pulse' : ''
                  }`}
                  style={{ width: `${percentage}%` }}
                />
                {isHighest && (
                  <div className="absolute inset-0 bg-white opacity-20 animate-shimmer" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};