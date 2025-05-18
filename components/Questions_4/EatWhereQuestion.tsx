"use client";
import { useFormContext } from "../../app/context/FormContext";
import CheckboxesQuestion from "../CheckboxesQuestion";
import { CHECKBOXES_QUESTION } from "../../const/constants";

const EatWhereQuestion = () => {
  const { handleChange, submitQuestion, invalid, setInvalid } =
    useFormContext();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1 pb-3">
        <h2 className="text-2xl">Feeling hungry? What’s your next move?</h2>
        {/* <p
          className={`text-xs italic font-bold text-green-500 animate-bounce
          ${invalid ? "visible" : "hidden"}
          `}
        >
          Please fill out all the form for accuracy!
        </p> */}
        {invalid && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-96 max-w-[90%]">
              <h2 className="text-xl text-gray-700 font-semibold mb-4">
                Oops! Looks like something's missing...
              </h2>

              <p className="text-gray-600 mb-6">
                We're almost done! Fill in the blanks so we can wrap this up.
              </p>
              <button
                onClick={() => setInvalid(false)}
                className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      {CHECKBOXES_QUESTION.map((index) => (
        <CheckboxesQuestion
          key={index.key}
          name="eating"
          id={index.title}
          checked={submitQuestion.eating.includes(index.value)}
          value={index.value}
          description={index.description}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default EatWhereQuestion;
