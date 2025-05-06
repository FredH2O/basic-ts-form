"use client";
import FormSection from "../../components/FormSection";
import { useFormContext } from "../context/FormContext";
import RechargeQuestion from "../../components/Questions_2/RechargeQuestion";
import Personality from "../../components/Questions_2/FriendQuestion";
import DescriptionQuestion from "../../components/Questions_2/DescriptionQuestion";

const Page2 = () => {
  const { handleSubmit, submitQuestion, handleChange } = useFormContext();
  return (
    <FormSection onSubmit={handleSubmit} next="/Page3" previous="/">
      <DescriptionQuestion />
      <RechargeQuestion />
      <Personality />
    </FormSection>
  );
};

export default Page2;
