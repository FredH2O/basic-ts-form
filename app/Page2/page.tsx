"use client";
import FormSection from "../../components/FormSection";
import NameQuestion from "../../components/Identity/NameQuestion";
import { useFormContext } from "../context/FormContext";

const Page2 = () => {
  const { handleSubmit, submitQuestion, handleChange } = useFormContext();
  return (
    <FormSection onSubmit={handleSubmit} next="/Page3" previous="/">
      <NameQuestion name={submitQuestion.name} onChange={handleChange} />
    </FormSection>
  );
};

export default Page2;
