import { type ChangeEvent } from "react";
import Input from "../Input";
import RadioQuestionsBox from "../RadioQuestionsBox";
import { DESCRIBE_YOURSELF } from "../../const/constants";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const DescriptionQuestion = ({ onChange }: Props) => {
  return (
    <RadioQuestionsBox title="Describe yourself?">
      {DESCRIBE_YOURSELF.map((answer) => (
        <div key={answer.key} className="flex gap-2 hover:text-blue-500 ">
          <Input
            type="radio"
            id={answer.value}
            name="description"
            value={answer.value}
            onChange={onChange}
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
