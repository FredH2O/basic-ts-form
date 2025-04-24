export const PERSONALITY_TRAITS = [
  {
    name: "Introverted 🌙",
    id: "introverted",
    value: "introverted",
  },
  {
    name: "Extroverted 🌟",
    id: "extroverted",
    value: "extroverted",
  },
  {
    name: "Creative 🎨",
    id: "creative",
    value: "creative",
  },
  {
    name: "Analytical 🧠",
    id: "analytical",
    value: "analytical",
  },
  {
    name: "Empathetic 💖",
    id: "empathetic",
    value: "empathetic",
  },
  {
    name: "Adventurous 🌍",
    id: "adventurous",
    value: "adventurous",
  },
] as const;

type PersonalityTrait = (typeof PERSONALITY_TRAITS)[number];
