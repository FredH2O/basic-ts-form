export const PERSONALITY_TRAITS = [
  {
    name: "A quiet, thoughtful friend 🌙",
    id: "introvert",
    value: "introvert",
  },
  {
    name: "A fun, outgoing friend 🌟",
    id: "extrovert",
    value: "extrovert",
  },
  {
    name: "A positive, sunny friend 🌞",
    id: "optimist",
    value: "optimist",
  },
  {
    name: "An honest, grounded friend 🌧️",
    id: "pessimist",
    value: "pessimist",
  },
  {
    name: "A careful, detail-loving friend 📋",
    id: "perfectionist",
    value: "perfectionist",
  },
  {
    name: "An adventurous, spontaneous friend 🌍",
    id: "adventurer",
    value: "adventurer",
  },
  {
    name: "A calm, peaceful friend ☮️",
    id: "peacemaker",
    value: "peacemaker",
  },
  {
    name: "A bold, take-charge friend 🦸‍♂️",
    id: "leader",
    value: "leader",
  },
] as const;

export const RELAX = [
  {
    title: "Read a book 📕",
    value: "reading",
    key: 1,
  },
  {
    title: "Go for a run or do yoga 🏃🏻‍➡️",
    value: "exercise",
    key: 2,
  },
  {
    title: "Movie or Series watching 🎞️",
    value: "tv",
    key: 3,
  },
  {
    title: "Spend time with people 🫂",
    value: "socializing",
    key: 4,
  },
  {
    title: "Play video games 🎮",
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

export const CHALLENGES = [
  {
    title: "-- Select --",
    value: "",
    key: 0,
  },
  {
    title: "Calm and Reserved 🌿",
    value: "introvert",
    key: 1,
  },
  {
    title: "Outgoing and Social 🔥",
    value: "extrovert",
    key: 2,
  },
  {
    title: "Optimistic and Positive 🌞",
    value: "optimist",
    key: 3,
  },
  {
    title: "Realistic and Cautious 🌧️",
    value: "pessimist",
    key: 4,
  },
  {
    title: "Organized and Detail-Oriented 📋",
    value: "perfectionist",
    key: 5,
  },
  {
    title: "Adventurous and Spontaneous 🌍",
    value: "adventurer",
    key: 6,
  },
  {
    title: "Peaceful and Harmonious ☮️",
    value: "peacemaker",
    key: 7,
  },
  {
    title: "Leader and Decision-Maker 🦸‍♂️",
    value: "leader",
    key: 8,
  },
  {
    title: "Other (Please specify) 🤔",
    value: "other",
    key: 9,
  },
] as const;

export type PersonalityTrait = (typeof PERSONALITY_TRAITS)[number]["value"];
export type Answer = (typeof RELAX)[number]["value"];
