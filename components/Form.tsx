"use client";
import Link from "next/link";
import { useFormContext } from "../app/context/FormContext";
import Activities from "./Questions/Activities";
import StudentQuestion from "./Questions/StudentQuestion";
import CommuteQuestion from "./Questions/CommuteQuestion";
import NameQuestion from "./Questions/NameQuestion";
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
      <StudentQuestion
        onChange={handleChange}
        checked={submitQuestion.student}
      />

      {/* transportation */}
      <CommuteQuestion
        onChange={handleChange}
        transportation={submitQuestion.transportation}
        otherAnswer={otherAnswer}
      />
      {/* activities */}
      <Activities onChange={handleChange} />
    </FormSection>
  );
};
export default Form;
