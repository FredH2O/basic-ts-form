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
    description:
      "An introvert is someone who enjoys spending time alone or in small groups. They usually recharge by staying in rather than going out.",
  },
  {
    title: "extrovert",
    description:
      "An extrovert is a person who gets energy from being around people. They love socializing, meeting new folks, and being in lively environments.",
  },
  {
    title: "optimist",
    description:
      "An optimist tends to see the good in situations. Even when things go wrong, they believe it'll all work out in the end.",
  },
  {
    title: "pessimist",
    description:
      "A pessimist usually expects the worst in a situation. They’re not trying to be negative — they just like being prepared for anything.",
  },
  {
    title: "perfectionist",
    description:
      "A perfectionist likes things done just right. They can be really detail-oriented and often set high standards for themselves and others.",
  },
  {
    title: "adventurer",
    description:
      "An adventurer loves trying new things, going to new places, and stepping out of their comfort zone. Life’s all about experiences for them.",
  },
  {
    title: "peacemaker",
    description:
      "A peacemaker tries to keep things calm and avoid conflict. They care about harmony and making sure everyone gets along.",
  },
  {
    title: "leader",
    description:
      "A leader naturally takes charge and helps guide others. They’re confident, decisive, and often the one people turn to when things get tough.",
  },
  {
    title: "mixed",
    description:
      "Someone with a mixed personality doesn’t fit into just one category. They’ve got a little bit of everything, depending on the situation.",
  },
] as const;

export const CHECKBOXES_QUESTION = [
  {
    key: 1,
    title: "introvert",
    value: "introvert",
    description: "Stay in and cook solo.",
  },
  {
    key: 2,
    title: "extrovert",
    value: "extrovert",
    description: "Rally friends for dinner out.",
  },
  {
    key: 3,
    title: "optimist",
    value: "optimist",
    description: "Cook and trust it’ll turn out great.",
  },
  {
    key: 4,
    title: "pessimist",
    value: "pessimist",
    description: "Assume nothing’s there—order backup food.",
  },
  {
    key: 5,
    title: "perfectionist",
    value: "perfectionist",
    description: "Plan the perfect dish, garnish and all.",
  },
  {
    key: 6,
    title: "adventurer",
    value: "adventurer",
    description: "Try something new—or explore and eat out.",
  },
  {
    key: 7,
    title: "peacemaker",
    value: "peacemaker",
    description: "Make something everyone will enjoy.",
  },
  {
    key: 8,
    title: "leader",
    value: "leader",
    description: "Pick the place and make it happen.",
  },
  {
    key: 9,
    title: "mixed",
    value: "mixed",
    description: "Sometimes cook, sometimes go out.",
  },
];

export type PersonalityTrait = (typeof PERSONALITY_TRAITS)[number]["value"];
export type Answer = (typeof TIRING_DAY)[number]["value"];
