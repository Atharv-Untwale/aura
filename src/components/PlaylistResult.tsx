import React from 'react';
import { Play, Clock, Music, RotateCcw, Heart, Share2, Download, Shuffle } from 'lucide-react';
import { playlists } from '../data/playlists';
import { AnimatedBackground } from './AnimatedBackground';
import { SoundVisualizer } from './SoundVisualizer';
import { ParticleSystem } from './ParticleSystem';
import { InteractiveButton } from './InteractiveButton';

interface PlaylistResultProps {
  mood: string;
  onRestart: () => void;
}

export const PlaylistResult: React.FC<PlaylistResultProps> = ({
  mood,
  onRestart
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const playlist = playlists[mood];

  const getTotalDuration = () => {
    let totalSeconds = 0;
    playlist.songs.forEach(song => {
      const [minutes, seconds] = song.duration.split(':').map(Number);
      totalSeconds += minutes * 60 + seconds;
    });
    const totalMinutes = Math.floor(totalSeconds / 60);
    return `${totalMinutes} min`;
  };

  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case 'energetic': return '⚡';
      case 'calm': return '🌙';
      case 'melancholic': return '🌧️';
      case 'happy': return '☀️';
      default: return '🎵';
    }
  };

  const getMoodDescription = (mood: string) => {
    switch (mood) {
      case 'energetic': return "You're feeling electric and ready to conquer the world!";
      case 'calm': return "You're in a peaceful, zen-like state of mind.";
      case 'melancholic': return "You're in a reflective, contemplative mood.";
      case 'happy': return "You're radiating joy and positivity!";
      default: return "You're in a great mood for music!";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 relative overflow-hidden">
      <AnimatedBackground mood={mood} />
      <ParticleSystem mood={mood} isActive={true} />
      
      <div className="max-w-4xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="text-6xl mb-4">{getMoodEmoji(mood)}</div>
          <h1 className="text-5xl font-bold text-gray-800 mb-2 text-shadow animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-gray-800 animate-blink">
            Your Mood: {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </h1>
          <p className="text-gray-600 text-xl mb-6">
            {getMoodDescription(mood)}
          </p>
          
          <SoundVisualizer isActive={isPlaying} mood={mood} />
          
          <InteractiveButton
            onClick={onRestart}
            variant="secondary"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full"
          >
            <>
              <RotateCcw className="w-4 h-4" />
              <span>Take Quiz Again</span>
            </>
          </InteractiveButton>
        </div>

        {/* Playlist Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift glass-morphism border border-white border-opacity-20">
          {/* Playlist Header */}
          <div className={`bg-gradient-to-r ${playlist.color} p-8 text-white relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black opacity-10" />
            <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center animate-pulse">
                <Music className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-2">{playlist.name}</h2>
                <p className="text-white text-opacity-90 text-xl">
                  {playlist.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-white text-opacity-90">
              <div className="flex items-center space-x-2">
                <Music className="w-4 h-4" />
                <span>{playlist.songs.length} songs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{getTotalDuration()}</span>
              </div>
            </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-200">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-200">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
            </div>
          </div>

          {/* Song List */}
          <div className="p-6 max-h-96 overflow-y-auto">
            <div className="space-y-3">
              {playlist.songs.map((song, index) => (
                <div
                  key={song.id}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-purple-25 transition-all duration-300 group hover-lift cursor-pointer"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:from-purple-100 group-hover:to-indigo-100 transition-all duration-300 group-hover:scale-110">
                    <Play className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800 truncate group-hover:text-purple-700 transition-colors duration-300">
                          {song.title}
                        </h3>
                        <p className="text-gray-600 text-sm truncate group-hover:text-purple-600 transition-colors duration-300">
                          {song.artist} • {song.album}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-3 flex-shrink-0">
                        <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-purple-100 rounded-full transition-all duration-300 hover:scale-110">
                          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors duration-200" />
                        </button>
                        <span className="text-gray-500 text-sm group-hover:text-purple-600 transition-colors duration-300">
                          {song.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6 bg-gradient-to-r from-gray-50 to-purple-25 flex justify-center space-x-4">
            <InteractiveButton
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r ${playlist.color} text-white shadow-lg`}
            >
              <>
              <Play className="w-5 h-5" />
                <span>{isPlaying ? 'Pause' : 'Play'} Playlist</span>
              </>
            </InteractiveButton>
            
            <InteractiveButton
              onClick={() => {}}
              variant="secondary"
              className="flex items-center space-x-2 px-6 py-4 rounded-full"
            >
              <>
                <Shuffle className="w-5 h-5" />
                <span>Shuffle</span>
              </>
            </InteractiveButton>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 glass-morphism rounded-2xl p-4">
          <p className="text-lg">🎵 Powered by your mood • Created with ♥ for music lovers 🎵</p>
        </div>
      </div>
    </div>
  );
};