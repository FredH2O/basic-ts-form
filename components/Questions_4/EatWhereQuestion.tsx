"use client";
import YesOrNo from "../YesOrNo";
import { useFormContext } from "../../app/context/FormContext";

const EatWhereQuestion = () => {
  const { handleChange } = useFormContext();

  return (
    <div>
      <YesOrNo
        name="eating"
        question="Do you prefer to dine in or dine out?"
        yesValue="introvert"
        noValue="extrovert"
        onClick={(e) => handleChange(e as any)}
      />
    </div>
  );
};

export default EatWhereQuestion;
