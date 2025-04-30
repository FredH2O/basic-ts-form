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

export const RELAX = [
  {
    title: "Read a book",
    value: "reading",
    key: 1,
  },
  {
    title: "Go for a run or do yoga",
    value: "exercise",
    key: 2,
  },
  {
    title: "Movie or Series watching",
    value: "tv",
    key: 3,
  },
  {
    title: "Spend time with people",
    value: "socializing",
    key: 4,
  },
  {
    title: "Play video games",
    value: "games",
    key: 5,
  },
] as const;

export const DESCRIPTION = [
  {
    title: "Chill and Quiet 🌿",
    value: "chill",
    key: 1,
  },
  {
    title: "Outgoing and Talkative 🔥",
    value: "outgoing",
    key: 2,
  },
  {
    title: "Chill and Outgoing 🗻",
    value: "both",
    key: 3,
  },
  {
    title: "Not Sure 🤔",
    value: "not sure",
    key: 4,
  },
] as const;

export type PersonalityTrait = (typeof PERSONALITY_TRAITS)[number]["value"];
export type Answer = (typeof RELAX)[number]["value"];
