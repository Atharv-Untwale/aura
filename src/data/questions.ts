import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "How would you describe your energy level right now?",
    options: [
      {
        text: "I'm feeling pumped and ready to take on the world!",
        moodWeight: { energetic: 3, calm: 0, melancholic: 0, happy: 2 }
      },
      {
        text: "I'm content and at peace",
        moodWeight: { energetic: 0, calm: 3, melancholic: 0, happy: 1 }
      },
      {
        text: "I'm feeling a bit low and reflective",
        moodWeight: { energetic: 0, calm: 1, melancholic: 3, happy: 0 }
      },
      {
        text: "I'm cheerful and optimistic",
        moodWeight: { energetic: 1, calm: 1, melancholic: 0, happy: 3 }
      }
    ]
  },
  {
    id: 2,
    text: "What kind of weather matches your current mood?",
    options: [
      {
        text: "Bright sunshine and clear skies",
        moodWeight: { energetic: 2, calm: 1, melancholic: 0, happy: 3 }
      },
      {
        text: "Gentle rain and gray clouds",
        moodWeight: { energetic: 0, calm: 2, melancholic: 3, happy: 0 }
      },
      {
        text: "Cool breeze and partly cloudy",
        moodWeight: { energetic: 1, calm: 3, melancholic: 1, happy: 1 }
      },
      {
        text: "Thunderstorm with lightning",
        moodWeight: { energetic: 3, calm: 0, melancholic: 1, happy: 0 }
      }
    ]
  },
  {
    id: 3,
    text: "If you could do anything right now, what would it be?",
    options: [
      {
        text: "Dance like nobody's watching",
        moodWeight: { energetic: 3, calm: 0, melancholic: 0, happy: 3 }
      },
      {
        text: "Take a peaceful walk in nature",
        moodWeight: { energetic: 0, calm: 3, melancholic: 1, happy: 1 }
      },
      {
        text: "Write in my journal or create art",
        moodWeight: { energetic: 0, calm: 2, melancholic: 3, happy: 0 }
      },
      {
        text: "Call friends and share good news",
        moodWeight: { energetic: 2, calm: 1, melancholic: 0, happy: 3 }
      }
    ]
  },
  {
    id: 4,
    text: "What color resonates with you most today?",
    options: [
      {
        text: "Vibrant orange or electric blue",
        moodWeight: { energetic: 3, calm: 0, melancholic: 0, happy: 2 }
      },
      {
        text: "Soft green or gentle lavender",
        moodWeight: { energetic: 0, calm: 3, melancholic: 1, happy: 1 }
      },
      {
        text: "Deep purple or midnight blue",
        moodWeight: { energetic: 0, calm: 1, melancholic: 3, happy: 0 }
      },
      {
        text: "Bright yellow or warm pink",
        moodWeight: { energetic: 1, calm: 1, melancholic: 0, happy: 3 }
      }
    ]
  },
  {
    id: 5,
    text: "How do you prefer to spend your evening?",
    options: [
      {
        text: "At a concert or party with lots of people",
        moodWeight: { energetic: 3, calm: 0, melancholic: 0, happy: 2 }
      },
      {
        text: "Reading a book with some tea",
        moodWeight: { energetic: 0, calm: 3, melancholic: 1, happy: 1 }
      },
      {
        text: "Listening to music alone and thinking",
        moodWeight: { energetic: 0, calm: 2, melancholic: 3, happy: 0 }
      },
      {
        text: "Playing games with friends and family",
        moodWeight: { energetic: 2, calm: 1, melancholic: 0, happy: 3 }
      }
    ]
  },
  {
    id: 6,
    text: "What's your relationship with silence right now?",
    options: [
      {
        text: "I need some noise and excitement!",
        moodWeight: { energetic: 3, calm: 0, melancholic: 0, happy: 2 }
      },
      {
        text: "Silence feels peaceful and necessary",
        moodWeight: { energetic: 0, calm: 3, melancholic: 1, happy: 1 }
      },
      {
        text: "Silence makes me feel contemplative",
        moodWeight: { energetic: 0, calm: 1, melancholic: 3, happy: 0 }
      },
      {
        text: "I prefer gentle background sounds",
        moodWeight: { energetic: 1, calm: 2, melancholic: 1, happy: 2 }
      }
    ]
  },
  {
    id: 7,
    text: "If your mood were a movie genre, what would it be?",
    options: [
      {
        text: "Action-packed adventure",
        moodWeight: { energetic: 3, calm: 0, melancholic: 0, happy: 2 }
      },
      {
        text: "Peaceful documentary about nature",
        moodWeight: { energetic: 0, calm: 3, melancholic: 0, happy: 1 }
      },
      {
        text: "Emotional drama that makes you think",
        moodWeight: { energetic: 0, calm: 1, melancholic: 3, happy: 0 }
      },
      {
        text: "Feel-good romantic comedy",
        moodWeight: { energetic: 1, calm: 1, melancholic: 0, happy: 3 }
      }
    ]
  },
  {
    id: 8,
    text: "What best describes your ideal social setting right now?",
    options: [
      {
        text: "Big crowd, loud music, high energy",
        moodWeight: { energetic: 3, calm: 0, melancholic: 0, happy: 2 }
      },
      {
        text: "Small gathering with close friends",
        moodWeight: { energetic: 1, calm: 2, melancholic: 0, happy: 3 }
      },
      {
        text: "Just me, myself, and my thoughts",
        moodWeight: { energetic: 0, calm: 2, melancholic: 3, happy: 0 }
      },
      {
        text: "Somewhere I can share laughter and joy",
        moodWeight: { energetic: 2, calm: 1, melancholic: 0, happy: 3 }
      }
    ]
  }
];