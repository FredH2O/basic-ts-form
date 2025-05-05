"use client";
import { useFormContext } from "../app/context/FormContext";
import DescriptionQuestion from "./Questions_1/DescriptionQuestion";
import ChallangesQuestion from "./Questions_1/ChallengesQuestion";
import NameQuestion from "./Questions_1/NameQuestion";
import FormSection from "./FormSection";

const Form = () => {
  const {
    submitQuestion,
    setSubmitQuestion,
    otherAnswer,
    setOtherAnswer,
    handleChange,
    handleSubmit,
  } = useFormContext();

  return (
    <FormSection onSubmit={handleSubmit} next="/Page2">
      {/* name */}
      <NameQuestion onChange={handleChange} name={submitQuestion.name} />

      {/* student */}
      <DescriptionQuestion onChange={handleChange} />

      {/* transportation */}
      <ChallangesQuestion
        onChange={handleChange}
        value={submitQuestion.challenges}
        otherAnswer={otherAnswer}
      />
    </FormSection>
  );
};
export default Form;
