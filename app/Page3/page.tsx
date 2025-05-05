"use client";
import FormSection from "../../components/FormSection";
import { useFormContext } from "../context/FormContext";
import FrustrationQuestion from "../../components/Questions_3/FrustrationQuestion";

const Page3 = () => {
  const { handleChange, handleSubmit, submitQuestion } = useFormContext();
  return (
    <FormSection next="/" onSubmit={handleSubmit} previous="/Page2">
      <FrustrationQuestion
        onChange={handleChange}
        value={submitQuestion.frustration}
      />
    </FormSection>
  );
};

export default Page3;
