"use client";
import { useState } from "react";

const Form = () => {
  const [submitQuestion, setSubmitQuestion] = useState<{
    name: string;
    student: boolean | undefined;
  }>({
    name: "",
    student: undefined,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setSubmitQuestion((prev) => ({
      ...prev,
      [name]: name === "student" ? value === "true" : value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="container border p-3 bg-neutral-700 m-auto max-w-md flex flex-col justify-center items-center">
        <fieldset className="border w-full p-3 rounded">
          <legend className="p-1 text-2xl">Tell us about yourself?</legend>

          <div className="flex flex-col justify-start max-w-sm space-y-1">
            {/* name */}
            <div className="flex flex-col">
              <label htmlFor="name">What's your name?</label>
              <input
                id="name"
                type="text"
                value={submitQuestion.name}
                onChange={handleChange}
                className="border p-2 bg-white rounded text-black"
              />
            </div>

            {/* student */}
            <div>
              <span className="mb-3">Are you a student?</span>
              <div className="flex flex-col">
                <label htmlFor="student-yes" className="">
                  <input
                    type="radio"
                    value="true"
                    onChange={handleChange}
                    placeholder="Yes"
                    className="mr-2"
                    name="student"
                    id="student"
                  />
                  Yes
                </label>

                <label htmlFor="student-no">
                  <input
                    value="false"
                    type="radio"
                    className="mr-2"
                    name="student"
                    id="student"
                  />
                  No
                </label>
              </div>
            </div>
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
