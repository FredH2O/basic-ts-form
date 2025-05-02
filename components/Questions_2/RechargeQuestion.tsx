import Input from "../Input";
import RadioQuestionsBox from "../RadioQuestionsBox";
import { RELAX } from "../../const/constants";
import { ChangeEvent } from "react";

type Prop = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RechargeQuestion = ({ onChange }: Prop) => {
  return (
    <RadioQuestionsBox title="After a tiring day which do you do the most?">
      {RELAX.map((answer) => (
        <div
          key={answer.key}
          className="flex gap-2 items-center hover:text-blue-500"
        >
          <Input
            type="radio"
            name="recharge"
            onChange={onChange}
            id={answer.value}
            value={answer.value} // Add value!
            className="hover:cursor-pointer"
          />
          <label htmlFor={answer.value} className="hover:cursor-pointer">
            {answer.title}
          </label>
        </div>
      ))}
    </RadioQuestionsBox>
  );
};

export default RechargeQuestion;
