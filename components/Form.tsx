"use client";
import { useFormContext } from "../app/context/FormContext";
import PersonalityQuestion from "./Identity/PersonalityQuestion";
import DescriptionQuestion from "./Identity/DescriptionQuestion";
import ChallangesQuestion from "./Identity/ChallengesQuestion";
import NameQuestion from "./Identity/NameQuestion";
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
        challenges={submitQuestion.challenges}
        otherAnswer={otherAnswer}
      />
      {/* PersonalityQuestion */}
      <PersonalityQuestion onChange={handleChange} />
    </FormSection>
  );
};
export default Form;
