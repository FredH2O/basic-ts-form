"use client";
import FormSection from "../../components/FormSection";
import { useFormContext } from "../context/FormContext";
import RechargeQuestion from "../../components/Questions_2/RechargeQuestion";
import Personality from "../../components/Questions_2/PersonalityQuestion";
import DescriptionQuestion from "../../components/Questions_2/DescriptionQuestion";

const Page2 = () => {
  const { handleSubmit, submitQuestion, handleChange } = useFormContext();
  return (
    <FormSection onSubmit={handleSubmit} next="/Page3" previous="/">
      <DescriptionQuestion onChange={handleChange} />
      <RechargeQuestion onChange={handleChange} />
      <Personality onChange={handleChange} />
    </FormSection>
  );
};

export default Page2;
