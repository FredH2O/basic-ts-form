"use client";
import { useState } from "react";

const Form = () => {
  const [submitQuestion, setSubmitQuestion] = useState<{
    name: string;
    student: boolean | undefined;
    transportation: string;
  }>({
    name: "",
    student: undefined,
    transportation: "",
  });

  const [otherAnswer, setOtherAnswer] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "transportation") {
      if (value === "Other") {
        setOtherAnswer(true);
        setSubmitQuestion((prev) => ({ ...prev, transportation: "" }));

        return;
      } else {
        setOtherAnswer(false);
      }
    }

    setSubmitQuestion((prev) => {
      if (name === "student") {
        return { ...prev, [name]: value === "true" };
      }

      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted");

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
                    checked={submitQuestion.student === true}
                  />
                  Yes
                </label>

                <label htmlFor="student-no">
                  <input
                    value="false"
                    type="radio"
                    onChange={handleChange}
                    className="mr-2"
                    name="student"
                    id="student"
                    checked={submitQuestion.student === false}
                  />
                  No
                </label>
              </div>
            </div>

            {/* transportation */}
            <div className="flex flex-col gap-2">
              <label htmlFor="commute">Do you commute by:</label>
              <select
                name="transportation"
                id="commute"
                className="rounded text-black bg-white p-1"
                onChange={handleChange}
              >
                <option value=""> -- Select -- </option>
                <option value="Bus">Bus 🚌</option>
                <option value="Taxi">Taxi 🚕</option>
                <option value="Luás">Luás 🚃</option>
                <option value="Car">Car 🚗</option>
                <option value="Other">Other</option>
              </select>
              {otherAnswer && (
                <input
                  name="transportation"
                  className="bg-white text-black p-2 rounded"
                  type="text"
                  placeholder="Other"
                  onChange={handleChange}
                  value={submitQuestion.transportation}
                />
              )}
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
