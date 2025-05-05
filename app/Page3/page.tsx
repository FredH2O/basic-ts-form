"use client";
import FormSection from "../../components/FormSection";
import { useFormContext } from "../context/FormContext";
import FrustrationQuestion from "../../components/Questions_3/FrustrationQuestion";
import ChallangesQuestion from "../../components/Questions_3/ChallengesQuestion";
const Page3 = () => {
  const { handleChange, handleSubmit, submitQuestion, otherAnswer } =
    useFormContext();
  return (
    <FormSection next="/" onSubmit={handleSubmit} previous="/Page2">
      <FrustrationQuestion
        onChange={handleChange}
        value={submitQuestion.frustration}
      />
      <ChallangesQuestion
        onChange={handleChange}
        value={submitQuestion.challenges}
        otherAnswer={otherAnswer}
      />
    </FormSection>
  );
};

export default Page3;
