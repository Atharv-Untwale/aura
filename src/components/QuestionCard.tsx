import React from 'react';
import { Music } from 'lucide-react';
import { Question, Option } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedOption: Option | null;
  onOptionSelect: (option: Option) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  onOptionSelect
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto hover-lift glass-morphism border border-white border-opacity-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center leading-relaxed">
        {question.text}
      </h2>
      
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onOptionSelect(option)}
            className={`group
              w-full p-6 rounded-xl text-left transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg
              border-2 font-medium text-lg relative overflow-hidden
              ${selectedOption === option
                ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 shadow-lg animate-glow'
                : 'border-gray-200 bg-gradient-to-r from-gray-50 to-white text-gray-700 hover:border-purple-300 hover:from-purple-25 hover:to-indigo-25 hover:shadow-md'
              }
            `}
          >
            {selectedOption === option && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-5 animate-pulse" />
            )}
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className={`
                  w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300
                  ${selectedOption === option
                    ? 'border-purple-500 bg-purple-500 scale-110'
                    : 'border-gray-300 group-hover:border-purple-400 group-hover:scale-105'
                  }
                `}>
                  {selectedOption === option && (
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  )}
                </div>
                {selectedOption === option && (
                  <div className="absolute inset-0 w-5 h-5 rounded-full border-2 border-purple-400 animate-ping" />
                )}
              </div>
              
              <div className="flex items-center space-x-3 flex-1">
                <Music className={`w-4 h-4 transition-colors duration-300 ${
                  selectedOption === option ? 'text-purple-500' : 'text-gray-400 group-hover:text-purple-400'
                }`} />
                <span className="flex-1">{option.text}</span>
              </div>
              
              {selectedOption === option && (
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-4 bg-purple-500 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};