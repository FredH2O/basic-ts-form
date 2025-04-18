"use client";
import { useState } from "react";
import Activities from "./Questions/Activities";
import StudentQuestion from "./Questions/StudentQuestion";
import type { ChangeEvent, FormEvent } from "react";
import CommuteQuestion from "./Questions/CommuteQuestion";

export type FormValues = {
  name: string;
  student: boolean | undefined;
  transportation: string;
};

const Form = () => {
  const [submitQuestion, setSubmitQuestion] = useState<FormValues>({
    name: "",
    student: undefined,
    transportation: "",
  });

  const [otherAnswer, setOtherAnswer] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      setSubmitQuestion((prev) => ({ ...prev, name: value }));
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

    if (name === "student") {
      setSubmitQuestion((prev) => ({ ...prev, [name]: value === "true" }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      `Thank you! ${submitQuestion.name}, ${submitQuestion.student}, ${submitQuestion.transportation}`
    );

    setSubmitQuestion({
      name: "",
      student: undefined,
      transportation: "",
    });

    setOtherAnswer(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="container border p-3 bg-neutral-700 m-auto max-w-md flex flex-col justify-center items-center"
      >
        <fieldset className="border w-full p-3 rounded">
          <legend className="p-1 text-2xl">Tell us about yourself?</legend>

          <div className="flex flex-col justify-start max-w-sm space-y-1">
            {/* name */}
            <div className="flex flex-col">
              <label htmlFor="name">What's your name?</label>
              <input
                id="name"
                type="text"
                name="name"
                value={submitQuestion.name}
                onChange={handleChange}
                className="border p-2 bg-white rounded text-black"
              />
            </div>

            {/* student */}
            <StudentQuestion
              onChange={handleChange}
              checked={submitQuestion.student}
            />

            {/* transportation */}
            <CommuteQuestion
              onChange={handleChange}
              transportation={submitQuestion.transportation}
              otherAnswer={otherAnswer}
            />

            <Activities />
          </div>
        </fieldset>

        <button className="border bg-blue-500 px-3 py-1 rounded mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
