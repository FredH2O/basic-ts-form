"use client";
import FormSection from "../../components/FormSection";
import { useFormContext } from "../context/FormContext";
import RechargeQuestion from "../../components/Lifestyle/RechargeQuestion";

const Page2 = () => {
  const { handleSubmit, submitQuestion, handleChange } = useFormContext();
  return (
    <FormSection onSubmit={handleSubmit} next="/Page3" previous="/">
      <RechargeQuestion onChange={handleChange} />
    </FormSection>
  );
};

export default Page2;
