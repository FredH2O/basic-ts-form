"use client";
import { useFormContext } from "../../app/context/FormContext";
import CheckboxesQuestion from "../CheckboxesQuestion";
import { CHECKBOXES_QUESTION } from "../../const/constants";

const EatWhereQuestion = () => {
  const { handleChange, submitQuestion } = useFormContext();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1 pb-3">
        <h2 className="text-2xl">Feeling hungry? What’s your next move?</h2>
        <p className="text-xs italic text-green-300">
          Tick all the boxes that apply to you.
        </p>
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
