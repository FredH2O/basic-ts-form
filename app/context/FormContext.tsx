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
  });

  const [score, setScore] = useState(initialScore);
  const [otherAnswer, setOtherAnswer] = useState<boolean>(false);

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

    setSubmitQuestion((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(score, null, 2));

    // alert(
    //   `Thank you! ${submitQuestion.name},
    //   ${submitQuestion.description},
    //   ${submitQuestion.challenges},
    //   ${submitQuestion.personality},
    //   ${submitQuestion.frustration},
    //   ${submitQuestion.approach},
    //   ${submitQuestion.recharge}`
    // );

    setSubmitQuestion({
      name: "",
      description: "",
      challenges: "",
      personality: "",
      frustration: "",
      approach: "",
      recharge: "",
    });

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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
