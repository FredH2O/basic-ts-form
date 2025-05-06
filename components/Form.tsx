"use client";
import { useFormContext } from "../app/context/FormContext";
import DescriptionQuestion from "./Questions_2/DescriptionQuestion";
import ChallangesQuestion from "./Questions_3/ChallengesQuestion";
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
      <NameQuestion name={submitQuestion.name} />
    </FormSection>
  );
};
export default Form;
