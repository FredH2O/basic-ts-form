import SelectQuestionBox from "../SelectQuestionBox";
import { FRUSTRATION_QUESTION } from "../../const/constants";
import { ChangeEvent } from "react";
import { FormValues } from "../../app/context/FormContext";

type Props = {
  value: FormValues["frustration"];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const FrustrationQuestion = ({ onChange, value }: Props) => {
  return (
    <div className="flex flex-col gap-2 p-1">
      <SelectQuestionBox
        title="When things don't go your way, what's your first instinct?"
        name="frustration"
        id="frustration"
        onChange={onChange}
        value={value}
        questions={FRUSTRATION_QUESTION}
      />
    </div>
  );
};

export default FrustrationQuestion;
