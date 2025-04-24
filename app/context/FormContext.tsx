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
  });

  const [otherAnswer, setOtherAnswer] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "challenges") {
      setOtherAnswer(value === "Other");

      if (value !== "Other") {
        setSubmitQuestion((prev) => ({ ...prev, challenges: value }));
      } else {
        setSubmitQuestion((prev) => ({ ...prev, challenges: "" }));
      }

      return;
    }

    if (name === "challengesOther") {
      setSubmitQuestion((prev) => ({ ...prev, challenges: value }));
    }

    setSubmitQuestion((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(
      `Thank you! ${submitQuestion.name}, ${submitQuestion.description}, ${submitQuestion.challenges}, ${submitQuestion.personality}`
    );

    setSubmitQuestion({
      name: "",
      description: "",
      challenges: "",
      personality: "",
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
