export const DESCRIBE_YOURSELF = [
  {
    title: "I’m quietly driven 🌙🦸‍♂️",
    value: "desc-introvert-leader",
    key: 1,
  },
  {
    title: "I’m warm and welcoming 🌟☮️",
    value: "desc-extrovert-peacemaker",
    key: 2,
  },
  {
    title: "I’m upbeat but focused 🌞📋",
    value: "desc-optimist-perfectionist",
    key: 3,
  },
  {
    title: "I’m grounded yet curious 🌧️🌍",
    value: "desc-pessimist-adventurer",
    key: 4,
  },
  {
    title: "I’m a mix of many things 🌈",
    value: "desc-mixed",
    key: 5,
  },
] as const;

export const PERSONALITY_TRAITS = [
  {
    title: "Quiet but confident 🌙🦸‍♂️",
    value: "pers-introvert-leader",
    key: 1,
  },
  {
    title: "Lively and peaceful 🌟☮️",
    value: "pers-extrovert-peacemaker",
    key: 2,
  },
  {
    title: "Cheerful and precise 🌞📋",
    value: "pers-optimist-perfectionist",
    key: 3,
  },
  {
    title: "Realistic and adventurous 🌧️🌍",
    value: "pers-pessimist-adventurer",
    key: 4,
  },
  {
    title: "Bold and balanced 🦸‍♂️☮️",
    value: "pers-leader-peacemaker",
    key: 5,
  },
] as const;

export const TIRING_DAY = [
  {
    title: "Read a book 📕",
    value: "introvert-peacemaker",
    key: 1,
  },
  {
    title: "Go for a run or do yoga 🏃🏻‍➡️",
    value: "adventurer-peacemaker",
    key: 2,
  },
  {
    title: "Movie or Series watching 🎞️",
    value: "peacemaker-introvert",
    key: 3,
  },
  {
    title: "Spend time with people 🫂",
    value: "extrovert-leader",
    key: 4,
  },
  {
    title: "Play video games 🎮",
    value: "mixed-introvert",
    key: 5,
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
  { title: "Other 🤔", value: "other", key: 9 },
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

export const STARTING_SOMETHING_NEW = [
  { title: "-- Select --", value: "", key: 0 },
  {
    title: "I research quietly before diving in 🌿",
    value: "introvert",
    key: 1,
  },
  { title: "I ask around and share ideas 🔥", value: "extrovert", key: 2 },
  { title: "I trust it’ll work out and jump in 🌞", value: "optimist", key: 3 },
  {
    title: "I think about what could go wrong first 🌧️",
    value: "pessimist",
    key: 4,
  },
  {
    title: "I plan every detail before I begin 📋",
    value: "perfectionist",
    key: 5,
  },
  {
    title: "I go with my gut and figure it out on the way 🌍",
    value: "adventurer",
    key: 6,
  },
  {
    title: "I find a balanced way that suits everyone ☮️",
    value: "peacemaker",
    key: 7,
  },
  {
    title: "I organize people and lead the charge 🦸‍♂️",
    value: "leader",
    key: 8,
  },
  { title: "It depends on the project 🤔", value: "other", key: 9 },
] as const;

export const PERSONALITY_DESCRIPTION = [
  {
    title: "introvert",
    description: "test",
  },
  {
    title: "extrovert",
    description: "test",
  },
  {
    title: "optimist",
    description: "",
  },
  {
    title: "pessimist",
    description: "",
  },
  {
    title: "perfectionist",
    description: "",
  },
  {
    title: "adventurer",
    description: "",
  },
  {
    title: "peacemaker",
    description: "",
  },
  {
    title: "leader",
    description: "",
  },
  {
    title: "mixed",
    description: "",
  },
];

export type PersonalityTrait = (typeof PERSONALITY_TRAITS)[number]["value"];
export type Answer = (typeof TIRING_DAY)[number]["value"];
