import { Playlist } from '../types';

export const playlists: Record<string, Playlist> = {
  energetic: {
    name: "High Voltage",
    description: "Pump up tracks to fuel your energy and get you moving!",
    mood: "energetic",
    color: "from-orange-500 to-red-500",
    songs: [
      {
        id: "1",
        title: "Thunder",
        artist: "Imagine Dragons",
        album: "Evolve",
        duration: "3:07",
        mood: "energetic"
      },
      {
        id: "2",
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        album: "Uptown Special",
        duration: "4:30",
        mood: "energetic"
      },
      {
        id: "3",
        title: "Can't Stop the Feeling!",
        artist: "Justin Timberlake",
        album: "Trolls Soundtrack",
        duration: "3:56",
        mood: "energetic"
      },
      {
        id: "4",
        title: "Stronger",
        artist: "Kelly Clarkson",
        album: "Breakaway",
        duration: "3:42",
        mood: "energetic"
      },
      {
        id: "5",
        title: "Don't Stop Me Now",
        artist: "Queen",
        album: "Jazz",
        duration: "3:29",
        mood: "energetic"
      },
      {
        id: "6",
        title: "Shake It Off",
        artist: "Taylor Swift",
        album: "1989",
        duration: "3:39",
        mood: "energetic"
      },
      {
        id: "7",
        title: "Good as Hell",
        artist: "Lizzo",
        album: "Cuz I Love You",
        duration: "2:39",
        mood: "energetic"
      },
      {
        id: "8",
        title: "Confident",
        artist: "Demi Lovato",
        album: "Confident",
        duration: "3:27",
        mood: "energetic"
      }
    ]
  },
  calm: {
    name: "Serene Vibes",
    description: "Peaceful melodies to soothe your soul and calm your mind.",
    mood: "calm",
    color: "from-blue-400 to-cyan-400",
    songs: [
      {
        id: "9",
        title: "Weightless",
        artist: "Marconi Union",
        album: "Ambient",
        duration: "8:10",
        mood: "calm"
      },
      {
        id: "10",
        title: "River",
        artist: "Leon Bridges",
        album: "Coming Home",
        duration: "4:17",
        mood: "calm"
      },
      {
        id: "11",
        title: "Holocene",
        artist: "Bon Iver",
        album: "Bon Iver, Bon Iver",
        duration: "5:36",
        mood: "calm"
      },
      {
        id: "12",
        title: "Mad World",
        artist: "Gary Jules",
        album: "Trading Snakeoil for Wolftickets",
        duration: "3:07",
        mood: "calm"
      },
      {
        id: "13",
        title: "The Night We Met",
        artist: "Lord Huron",
        album: "Strange Trails",
        duration: "3:28",
        mood: "calm"
      },
      {
        id: "14",
        title: "To Build a Home",
        artist: "The Cinematic Orchestra",
        album: "Ma Fleur",
        duration: "6:17",
        mood: "calm"
      },
      {
        id: "15",
        title: "Breathe Me",
        artist: "Sia",
        album: "Colour the Small One",
        duration: "4:31",
        mood: "calm"
      },
      {
        id: "16",
        title: "Claire de Lune",
        artist: "Claude Debussy",
        album: "Suite Bergamasque",
        duration: "4:37",
        mood: "calm"
      }
    ]
  },
  melancholic: {
    name: "Midnight Reflections",
    description: "Introspective tracks for deep thoughts and emotional moments.",
    mood: "melancholic",
    color: "from-purple-500 to-indigo-600",
    songs: [
      {
        id: "17",
        title: "Hurt",
        artist: "Johnny Cash",
        album: "American IV: The Man Comes Around",
        duration: "3:38",
        mood: "melancholic"
      },
      {
        id: "18",
        title: "Black",
        artist: "Pearl Jam",
        album: "Ten",
        duration: "5:43",
        mood: "melancholic"
      },
      {
        id: "19",
        title: "Creep",
        artist: "Radiohead",
        album: "Pablo Honey",
        duration: "3:58",
        mood: "melancholic"
      },
      {
        id: "20",
        title: "Someone Like You",
        artist: "Adele",
        album: "21",
        duration: "4:45",
        mood: "melancholic"
      },
      {
        id: "21",
        title: "The Sound of Silence",
        artist: "Simon & Garfunkel",
        album: "Sounds of Silence",
        duration: "3:05",
        mood: "melancholic"
      },
      {
        id: "22",
        title: "Everybody Hurts",
        artist: "R.E.M.",
        album: "Automatic for the People",
        duration: "5:17",
        mood: "melancholic"
      },
      {
        id: "23",
        title: "Tears in Heaven",
        artist: "Eric Clapton",
        album: "Rush Soundtrack",
        duration: "4:32",
        mood: "melancholic"
      },
      {
        id: "24",
        title: "Hallelujah",
        artist: "Jeff Buckley",
        album: "Grace",
        duration: "6:53",
        mood: "melancholic"
      }
    ]
  },
  happy: {
    name: "Sunshine Melodies",
    description: "Uplifting songs to brighten your day and spread joy!",
    mood: "happy",
    color: "from-yellow-400 to-orange-400",
    songs: [
      {
        id: "25",
        title: "Happy",
        artist: "Pharrell Williams",
        album: "Girl",
        duration: "3:53",
        mood: "happy"
      },
      {
        id: "26",
        title: "Walking on Sunshine",
        artist: "Katrina and the Waves",
        album: "Walking on Sunshine",
        duration: "3:58",
        mood: "happy"
      },
      {
        id: "27",
        title: "Good Vibrations",
        artist: "The Beach Boys",
        album: "Pet Sounds",
        duration: "3:36",
        mood: "happy"
      },
      {
        id: "28",
        title: "Here Comes the Sun",
        artist: "The Beatles",
        album: "Abbey Road",
        duration: "3:05",
        mood: "happy"
      },
      {
        id: "29",
        title: "Count on Me",
        artist: "Bruno Mars",
        album: "Doo-Wops & Hooligans",
        duration: "3:17",
        mood: "happy"
      },
      {
        id: "30",
        title: "Three Little Birds",
        artist: "Bob Marley & The Wailers",
        album: "Exodus",
        duration: "3:00",
        mood: "happy"
      },
      {
        id: "31",
        title: "I Can See Clearly Now",
        artist: "Johnny Nash",
        album: "I Can See Clearly Now",
        duration: "2:53",
        mood: "happy"
      },
      {
        id: "32",
        title: "What a Wonderful World",
        artist: "Louis Armstrong",
        album: "What a Wonderful World",
        duration: "2:18",
        mood: "happy"
      }
    ]
  }
};