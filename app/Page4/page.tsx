"use client";
import FormSection from "../../components/FormSection";
import EatWhereQuestion from "../../components/Questions_4/EatWhereQuestion";
import { useFormContext } from "../context/FormContext";

const Page4 = () => {
  const { handleSubmit, submitQuestion, handleReset, result } =
    useFormContext();

  return (
    <FormSection
      onSubmit={handleSubmit}
      closeResult={handleReset}
      result={result}
      name={submitQuestion.name}
      previous="/Page3"
    >
      <EatWhereQuestion />
    </FormSection>
  );
};

export default Page4;
