export const PERSONALITY_TRAITS = [
  {
    title: "A quiet, thoughtful friend 🌙",
    id: "introvert",
    value: "introvert",
  },
  {
    title: "A fun, outgoing friend 🌟",
    id: "extrovert",
    value: "extrovert",
  },
  {
    title: "A positive, sunny friend 🌞",
    id: "optimist",
    value: "optimist",
  },
  {
    title: "An honest, grounded friend 🌧️",
    id: "pessimist",
    value: "pessimist",
  },
  {
    title: "A careful, detail-loving friend 📋",
    id: "perfectionist",
    value: "perfectionist",
  },
  {
    title: "An adventurous, spontaneous friend 🌍",
    id: "adventurer",
    value: "adventurer",
  },
  {
    title: "A calm, peaceful friend ☮️",
    id: "peacemaker",
    value: "peacemaker",
  },
  {
    title: "A bold, take-charge friend 🦸‍♂️",
    id: "leader",
    value: "leader",
  },
] as const;

export const TIRING_DAY = [
  {
    title: "Read a book 📕",
    value: "introvert+peacemaker",
    key: 1,
  },
  {
    title: "Go for a run or do yoga 🏃🏻‍➡️",
    value: "adventurer+peacemaker",
    key: 2,
  },
  {
    title: "Movie or Series watching 🎞️",
    value: "peacemaker+introvert",
    key: 3,
  },
  {
    title: "Spend time with people 🫂",
    value: "extrovert+leader",
    key: 4,
  },
  {
    title: "Play video games 🎮",
    value: "mixed+introvert",
    key: 5,
  },
] as const;

export const DESCRIBE_YOURSELF = [
  {
    title: "A quiet, thoughtful friend 🌙",
    id: "introvert",
    value: "introvert",
    key: 1,
  },
  {
    title: "A fun, outgoing friend 🌟",
    id: "extrovert",
    value: "extrovert",
    key: 2,
  },
  {
    title: "A positive, sunny friend 🌞",
    id: "optimist",
    value: "optimist",
    key: 3,
  },
  {
    title: "An honest, grounded friend 🌧️",
    id: "pessimist",
    value: "pessimist",
    key: 4,
  },
  {
    title: "A careful, detail-loving friend 📋",
    id: "perfectionist",
    value: "perfectionist",
    key: 5,
  },
  {
    title: "An adventurous, spontaneous friend 🌍",
    id: "adventurer",
    value: "adventurer",
    key: 6,
  },
  {
    title: "A calm, peaceful friend ☮️",
    id: "peacemaker",
    value: "peacemaker",
    key: 7,
  },
  {
    title: "A bold, take-charge friend 🦸‍♂️",
    id: "leader",
    value: "leader",
    key: 8,
  },
  {
    title: "A mix of many things 🌈",
    id: "mixed",
    value: "mixed",
    key: 9,
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
export type Answer = (typeof TIRING_DAY)[number]["value"];
