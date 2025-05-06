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
  { title: "-- Select --", value: "", key: 0 },
  {
    title: "Handle it quietly and independently 🌿",
    value: "introvert",
    key: 1,
  },
  { title: "Talk it out and gather support 🔥", value: "extrovert", key: 2 },
  { title: "Stay positive and hopeful 🌞", value: "optimist", key: 3 },
  { title: "Plan for what could go wrong 🌧️", value: "pessimist", key: 4 },
  {
    title: "Focus on fixing every little detail 📋",
    value: "perfectionist",
    key: 5,
  },
  { title: "Try something bold and untested 🌍", value: "adventurer", key: 6 },
  { title: "Keep things calm and balanced ☮️", value: "peacemaker", key: 7 },
  { title: "Step up and take charge 🦸‍♂️", value: "leader", key: 8 },
  { title: "It depends on the situation 🤔", value: "other", key: 9 },
] as const;

export const FRUSTRATION_QUESTION = [
  { title: "-- Select --", value: "", key: 0 },
  { title: "🛠️ Handle it myself.", value: "introvert", key: 1 },
  { title: "🗣️ Talk it out.", value: "extrovert", key: 2 },
  { title: "😂 Laugh it off.", value: "optimist", key: 3 },
  { title: "😞 Nothing ever works...", value: "pessimist", key: 4 },
  { title: "🔧 Fix every detail.", value: "perfectionist", key: 5 },
  { title: "🧭 Try a new way!", value: "adventurer", key: 6 },
  { title: "🕊️ Keep the peace.", value: "peacemaker", key: 7 },
  { title: "👑 Take the lead.", value: "leader", key: 8 },
  { title: "🌦️ It depends on the day.", value: "mixed", key: 9 },
] as const;

export type PersonalityTrait = (typeof PERSONALITY_TRAITS)[number]["value"];
export type Answer = (typeof TIRING_DAY)[number]["value"];
