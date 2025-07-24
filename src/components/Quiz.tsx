import React, { useState } from 'react';
import { ChevronRight, RotateCcw, Sparkles } from 'lucide-react';
import { Question, MoodScores, Option } from '../types';
import { questions } from '../data/questions';
import { QuestionCard } from './QuestionCard';
import { PlaylistResult } from './PlaylistResult';
import { AnimatedBackground } from './AnimatedBackground';
import { InteractiveButton } from './InteractiveButton';
import { MoodMeter } from './MoodMeter';

export const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Option[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [showMoodAnalysis, setShowMoodAnalysis] = useState(false);

  const handleAnswerSelect = (option: Option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (!selectedOption) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowMoodAnalysis(true);
      setTimeout(() => {
        setShowResult(true);
      }, 3000);
    }
  };

  const calculateMood = (): string => {
    const moodScores: MoodScores = {
      energetic: 0,
      calm: 0,
      melancholic: 0,
      happy: 0
    };

    answers.forEach(answer => {
      moodScores.energetic += answer.moodWeight.energetic;
      moodScores.calm += answer.moodWeight.calm;
      moodScores.melancholic += answer.moodWeight.melancholic;
      moodScores.happy += answer.moodWeight.happy;
    });

    const maxScore = Math.max(...Object.values(moodScores));
    const dominantMood = Object.entries(moodScores).find(([_, score]) => score === maxScore)?.[0];
    
    return dominantMood || 'happy';
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResult(false);
    setShowMoodAnalysis(false);
    setSelectedOption(null);
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  if (showResult) {
    return (
      <>
      <PlaylistResult 
        mood={calculateMood()} 
        onRestart={resetQuiz}
      />
      </>
    );
  }

  if (showMoodAnalysis) {
    const moodScores: MoodScores = {
      energetic: 0,
      calm: 0,
      melancholic: 0,
      happy: 0
    };

    answers.forEach(answer => {
      moodScores.energetic += answer.moodWeight.energetic;
      moodScores.calm += answer.moodWeight.calm;
      moodScores.melancholic += answer.moodWeight.melancholic;
      moodScores.happy += answer.moodWeight.happy;
    });

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 relative overflow-hidden">
        <AnimatedBackground mood={calculateMood()} />
        
        <div className="max-w-2xl mx-auto relative z-20">
          <div className="text-center mb-8 pt-20">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-purple-500 animate-spin" />
              <h1 className="text-4xl font-bold text-gray-800 animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-purple-500 animate-blink">
                Analyzing Your Mood...
              </h1>
              <Sparkles className="w-8 h-8 text-purple-500 animate-spin" />
            </div>
            <p className="text-gray-600 text-lg">
              Processing your responses to create the perfect playlist
            </p>
          </div>

          <MoodMeter scores={moodScores} />

          <div className="text-center">
            <div className="inline-block animate-glow">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            </div>
            <p className="text-gray-500">Curating your personalized playlist...</p>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-4xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2 text-shadow hover-lift">
            Mood Playlist Generator
          </h1>
          <p className="text-gray-600 text-xl">
            Answer a few questions to get your perfect playlist
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8 glass-morphism rounded-2xl p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-white bg-opacity-50 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-500 to-indigo-500 h-3 rounded-full transition-all duration-500 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white opacity-30 animate-shimmer" />
            </div>
          </div>
        </div>

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          selectedOption={selectedOption}
          onOptionSelect={handleAnswerSelect}
        />

        {/* Next Button */}
        <div className="flex justify-center mt-8">
          <InteractiveButton
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            className="flex items-center space-x-2 px-8 py-4 rounded-full"
          >
            <>
              <span>
                {currentQuestionIndex === questions.length - 1 ? 'Get My Playlist' : 'Next Question'}
              </span>
              <ChevronRight className="w-5 h-5" />
            </>
          </InteractiveButton>
        </div>

        {/* Restart button */}
        <div className="flex justify-center mt-4">
          <InteractiveButton
            onClick={resetQuiz}
            variant="secondary"
            className="flex items-center space-x-2 px-4 py-2 rounded-full"
          >
            <>
              <RotateCcw className="w-4 h-4" />
              <span>Start Over</span>
            </>
          </InteractiveButton>
        </div>
      </div>
    </div>
  );
};