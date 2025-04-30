import Input from "../Input";
import RadioQuestionsBox from "../RadioQuestionsBox";
import { RELAX } from "../../const/constants";

const RechargeQuestion = () => {
  return (
    <RadioQuestionsBox title="After a tiring day which do you do the most?">
      <div className="flex flex-col p-1">
        {RELAX.map((answer) => (
          <label key={answer.value} htmlFor={answer.value}>
            <Input type="radio" name="recharge" id={answer.value} />
            <span>{answer.title}</span>
          </label>
        ))}
      </div>
    </RadioQuestionsBox>
  );
};

export default RechargeQuestion;
