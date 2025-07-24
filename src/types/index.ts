export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  text: string;
  moodWeight: {
    energetic: number;
    calm: number;
    melancholic: number;
    happy: number;
  };
}

export interface MoodScores {
  energetic: number;
  calm: number;
  melancholic: number;
  happy: number;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  mood: string;
}

export interface Playlist {
  name: string;
  description: string;
  songs: Song[];
  mood: string;
  color: string;
}