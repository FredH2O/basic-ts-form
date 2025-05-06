import { PERSONALITY_TRAITS } from "../../const/constants";
import Input from "../Input";
import RadioQuestionsBox from "../RadioQuestionsBox";

const Friend = () => {
  return (
    <RadioQuestionsBox title="What type of friend do you prefer?">
      {PERSONALITY_TRAITS.map((answer) => (
        <div key={answer.key} className="flex gap-2 hover:text-blue-500 ">
          <Input
            className="hover:cursor-pointer"
            type="radio"
            name="personality"
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

export default Friend;
