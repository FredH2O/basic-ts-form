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
  student: boolean | undefined;
  transportation: string;
  activity: string;
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
    student: undefined,
    transportation: "",
    activity: "",
  });

  const [otherAnswer, setOtherAnswer] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "student") {
      setSubmitQuestion((prev) => ({ ...prev, [name]: value === "true" }));
      return;
    }

    if (name === "transportation") {
      setOtherAnswer(value === "Other");

      if (value !== "Other") {
        setSubmitQuestion((prev) => ({ ...prev, transportation: value }));
      } else {
        setSubmitQuestion((prev) => ({ ...prev, transportation: "" }));
      }

      return;
    }

    if (name === "transportationOther") {
      setSubmitQuestion((prev) => ({ ...prev, transportation: value }));
    }

    setSubmitQuestion((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const studentAnswer = submitQuestion.student ? "Yes" : "No";

    alert(
      `Thank you! ${submitQuestion.name}, ${studentAnswer}, ${submitQuestion.transportation}, ${submitQuestion.activity}`
    );

    setSubmitQuestion({
      name: "",
      student: undefined,
      transportation: "",
      activity: "",
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
