"use client";
import { createContext, useContext, useState } from "react";
import {
  Dispatch,
  ChangeEvent,
  FormEvent,
  SetStateAction,
  ReactNode,
} from "react";

export type FormValues = {
  name: string;
  description: string;
  challenges: string;
  personality: string;
  frustration: string;
  approach: string;
  recharge: string;
  eating: string[];
};

type ScoreValue = {
  introvert: number;
  extrovert: number;
  optimist: number;
  pessimist: number;
  perfectionist: number;
  adventurer: number;
  peacemaker: number;
  leader: number;
  mixed: number;
};

type FormContextType = {
  submitQuestion: FormValues;
  setSubmitQuestion: Dispatch<SetStateAction<FormValues>>;
  otherAnswer: boolean;
  setOtherAnswer: Dispatch<SetStateAction<boolean>>;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  score: ScoreValue;
  setScore: Dispatch<SetStateAction<ScoreValue>>;
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
  handleReset: (e: FormEvent<HTMLButtonElement>) => void;
  invalid: boolean;
  setInvalid: Dispatch<SetStateAction<boolean>>;
};

const initialScore = {
  introvert: 0,
  extrovert: 0,
  optimist: 0,
  pessimist: 0,
  perfectionist: 0,
  adventurer: 0,
  peacemaker: 0,
  leader: 0,
  mixed: 0,
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [submitQuestion, setSubmitQuestion] = useState<FormValues>({
    name: "",
    description: "",
    challenges: "",
    personality: "",
    frustration: "",
    approach: "",
    recharge: "",
    eating: [],
  });
  const [score, setScore] = useState<FormContextType["score"]>(initialScore);
  const [otherAnswer, setOtherAnswer] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const [invalid, setInvalid] = useState<boolean>(false);

  const stripPrefix = (value: string): string => {
    return value.replace(/^desc-/, "").replace(/^pers-/, "");
  };

  const updateScore = (keyString: string) => {
    const keys = keyString.split("-");

    setScore((prevScore) => {
      const newScore = { ...prevScore };

      for (const key of keys) {
        if (key in newScore) {
          newScore[key as keyof typeof newScore]++;
        }
      }

      return newScore;
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (submitQuestion.eating.length >= 0) {
      setInvalid(false);
    }

    const { name, value } = e.target;

    console.log(
      `Your on ${name.toUpperCase()} + and the value is ${value.toUpperCase()}`
    );

    if (name === "challenges") {
      const cleanedValue =
        value.startsWith("desc-") || value.startsWith("pers-")
          ? stripPrefix(value)
          : value;

      setOtherAnswer(value === "other");

      if (value !== "other") {
        setSubmitQuestion((prev) => ({ ...prev, challenges: value }));
      } else {
        setSubmitQuestion((prev) => ({ ...prev, challenges: "" }));
      }
      updateScore(cleanedValue);
      return;
    }

    if (name === "challengesOther") {
      setSubmitQuestion((prev) => ({ ...prev, challenges: value }));
    }

    if (name === "description" || name === "personality") {
      const cleanedValue = stripPrefix(value);
      updateScore(cleanedValue);
      setSubmitQuestion((prev) => ({ ...prev, [name]: cleanedValue }));
      return;
    }

    if (
      name === "description" ||
      name === "personality" ||
      name === "recharge" ||
      name === "frustration" ||
      name === "approach"
    ) {
      const cleanedValue =
        value.startsWith("desc-") || value.startsWith("pers-")
          ? stripPrefix(value)
          : value;

      updateScore(cleanedValue);
      setSubmitQuestion((prev) => ({ ...prev, [name]: cleanedValue }));
      return;
    }

    if (name === "eating") {
      const isChecked = (e.target as HTMLInputElement).checked;

      setSubmitQuestion((prev) => {
        const existing = prev.eating || [];

        const updatedEating = isChecked
          ? [...existing, value]
          : existing.filter((v) => v !== value);

        return { ...prev, eating: updatedEating };
      });

      if (isChecked) {
        updateScore(value);
      }
      return;
    }

    setSubmitQuestion((prev) => ({ ...prev, [name]: value }));
  };

  const getTopTrait = (value: typeof initialScore) => {
    const entries = Object.entries(value);
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitQuestion.eating.length === 0) {
      setInvalid(true);
      return;
    }

    console.log(
      `Overall score in JSON format: ${JSON.stringify(score, null, 2)}`
    );

    const topTrait = getTopTrait(score);

    switch (topTrait) {
      case "introvert":
        setResult("introvert");
        break;

      case "extrovert":
        setResult("extrovert");
        break;

      case "optimist":
        setResult("optimist");
        break;

      case "pessimist":
        setResult("pessimist");
        break;

      case "perfectionist":
        setResult("perfectionist");
        break;

      case "adventurer":
        setResult("adventurer");
        break;

      case "peacemaker":
        setResult("peacemaker");
        break;

      case "leader":
        setResult("leader");
        break;

      case "mixed":
        setResult("mixed");
        break;

      default:
        break;
    }
  };

  const handleReset = () => {
    setResult("");

    setSubmitQuestion({
      name: "",
      description: "",
      challenges: "",
      personality: "",
      frustration: "",
      approach: "",
      recharge: "",
      eating: [],
    });

    setScore(initialScore); //reset
    setOtherAnswer(false);
  };

  return (
    <FormContext.Provider
      value={{
        submitQuestion,
        setSubmitQuestion,
        otherAnswer,
        setOtherAnswer,
        handleChange,
        handleSubmit,
        score,
        setScore,
        result,
        setResult,
        handleReset,
        invalid,
        setInvalid,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
