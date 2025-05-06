import Input from "../Input";
import RadioQuestionsBox from "../RadioQuestionsBox";
import { TIRING_DAY } from "../../const/constants";

const RechargeQuestion = () => {
  return (
    <RadioQuestionsBox title="Tiring day which do you do the most?">
      {TIRING_DAY.map((answer) => (
        <div
          key={answer.key}
          className="flex gap-2 items-center hover:text-blue-500"
        >
          <Input
            className="hover:cursor-pointer"
            type="radio"
            name="recharge"
            id={answer.value}
            value={answer.value}
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
