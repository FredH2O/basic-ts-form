"use client";
import FormSection from "../../components/FormSection";
import { useFormContext } from "../context/FormContext";

const Page3 = () => {
  const { handleChange, handleSubmit } = useFormContext();
  return (
    <FormSection next="/" onSubmit={handleSubmit} previous="/Page2">
      <div></div>
    </FormSection>
  );
};

export default Page3;
