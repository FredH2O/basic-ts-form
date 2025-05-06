"use client";
import FormSection from "../../components/FormSection";
import { useFormContext } from "../context/FormContext";
import FrustrationQuestion from "../../components/Questions_3/FrustrationQuestion";
import ChallangesQuestion from "../../components/Questions_3/ChallengesQuestion";
import ApproachQuestion from "../../components/Questions_3/ApproachQuestion";

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
      <ApproachQuestion
        onChange={handleChange}
        value={submitQuestion.approach}
      />
    </FormSection>
  );
};

export default Page3;
