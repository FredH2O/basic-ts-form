"use client";
import FormSection from "../../components/FormSection";
import { useFormContext } from "../context/FormContext";
import Input from "../../components/Input";

const Page2 = () => {
  const { handleSubmit, submitQuestion, handleChange } = useFormContext();
  return (
    <FormSection onSubmit={handleSubmit} next="/Page3" previous="/">
      <Input type="textarea" />
    </FormSection>
  );
};

export default Page2;
