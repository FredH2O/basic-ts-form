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
      <div className="flex flex-col p-1">
        {RELAX.map((answer) => (
          <label key={answer.key} htmlFor={answer.value}>
            <Input
              type="radio"
              name="recharge"
              onChange={onChange}
              id={answer.value}
            />
            <span>{answer.title}</span>
          </label>
        ))}
      </div>
    </RadioQuestionsBox>
  );
};

export default RechargeQuestion;
