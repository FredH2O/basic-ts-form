import Input from "../Input";
import RadioQuestionsBox from "../RadioQuestionsBox";
import { DESCRIBE_YOURSELF } from "../../const/constants";

const DescriptionQuestion = () => {
  return (
    <RadioQuestionsBox title="Describe yourself?">
      {DESCRIBE_YOURSELF.map((answer) => (
        <div key={answer.key} className="flex gap-2 hover:text-blue-500 ">
          <Input
            className="hover:cursor-pointer"
            type="radio"
            name="description"
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
export default DescriptionQuestion;
