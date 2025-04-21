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
  activity: string;
};

const Form = () => {
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
    <div className="flex justify-center items-center h-screen px-3">
      <form
        onSubmit={handleSubmit}
        className="container p-3 bg-neutral-700 m-auto max-w-md rounded flex flex-col justify-center items-center"
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

            <Activities onChange={handleChange} />
          </div>
        </fieldset>

        <button className=" bg-blue-500 px-3 py-1 rounded mt-3">Submit</button>
      </form>
    </div>
  );
};
export default Form;
