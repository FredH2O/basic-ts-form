import { ChangeEvent } from "react";
import SelectQuestionBox from "../SelectQuestionBox";
import { FormValues } from "../../app/context/FormContext";
import { STARTING_SOMETHING_NEW } from "../../const/constants";

type Prop = {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: FormValues["approach"];
};

const ApproachQuestion = ({ value, onChange }: Prop) => {
  return (
    <div className="flex flex-col gap-2 p-1">
      <SelectQuestionBox
        title="What's your approach when starting something new?"
        name="approach"
        id="approach"
        value={value}
        questions={STARTING_SOMETHING_NEW}
        onChange={onChange}
        ariaLabel="Select your approach to starting new things."
      />
    </div>
  );
};

export default ApproachQuestion;
