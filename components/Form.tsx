"use client";
import { useState } from "react";

const Form = () => {
  const [submitQuestion, setSubmitQuestion] = useState<{
    name: string;
    student: boolean;
  }>({
    name: "",
    student: null,
  });

  const handleSubmit = () => {
    setSubmitQuestion();
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
            <label htmlFor="">What's your name?</label>
            <input type="text" className="border p-1 bg-white" />
            <label htmlFor="">Are you a student?</label>
            <select name="" id="">
              <option value="true">Yes</option>
              <option value="false">False</option>
            </select>
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
