export const ACTIVITIES = [
  {
    name: "Study Group",
    id: "study",
    value: "studying",
  },
  {
    name: "Dancing Class",
    id: "dancing",
    value: "dancing",
  },
  {
    name: "Sports and Fitness",
    id: "sports",
    value: "sports",
  },
  {
    name: "Cooking Best Practices",
    id: "cooking",
    value: "cooking",
  },
  {
    name: "Coding Community",
    id: "coding",
    value: "coding",
  },
  {
    name: "E-Sports Arena",
    id: "esports",
    value: "esports",
  },
] as const;

type Activity = (typeof ACTIVITIES)[number];
