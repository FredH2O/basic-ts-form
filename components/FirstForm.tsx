"use client";
import { useFormContext } from "../app/context/FormContext";
import NameQuestion from "./Questions_1/NameQuestion";
import FormSection from "./FormSection";

const FirstForm = () => {
  const { submitQuestion, handleSubmit } = useFormContext();

  return (
    <FormSection onSubmit={handleSubmit} next="/Page2">
      <NameQuestion name={submitQuestion.name} />
    </FormSection>
  );
};
export default FirstForm;
