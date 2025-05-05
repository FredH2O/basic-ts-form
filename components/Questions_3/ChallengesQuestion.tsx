import { type ChangeEvent } from "react";
import { FormValues } from "../../app/context/FormContext";
import Input from "../Input";
import { CHALLENGES } from "../../const/constants";
import SelectQuestionBox from "../SelectQuestionBox";

type Props = {
  onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  otherAnswer: boolean;
  value: FormValues["challenges"];
};

const ChallangesQuestion = ({ onChange, otherAnswer, value }: Props) => {
  return (
    <div className="flex flex-col gap-2 p-1">
      {/* component select */}
      <SelectQuestionBox
        title="How would you handle challanges?"
        name="challenges"
        id="challenges"
        onChange={onChange}
        value={value}
        questions={CHALLENGES}
      />

      {otherAnswer && (
        <Input
          name="challengesOther"
          className="bg-white text-black p-2 rounded"
          type="text"
          placeholder="What other could it be? 🤔"
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
};

export default ChallangesQuestion;
