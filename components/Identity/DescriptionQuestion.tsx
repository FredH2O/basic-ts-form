import { type ChangeEvent } from "react";
import Input from "../Input";
import RadioQuestionsBox from "../RadioQuestionsBox";
import { DESCRIPTION } from "../../const/constants";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const DescriptionQuestion = ({ onChange }: Props) => {
  return (
    <RadioQuestionsBox title="How do describe yourself?">
      <div className="flex flex-col space-y-1">
        {DESCRIPTION.map((answer) => (
          <label htmlFor={answer.value} key={answer.key}>
            <Input
              type="radio"
              id={answer.value}
              name="description"
              value={answer.value}
              onChange={onChange}
            />
            <span>{answer.title}</span>
          </label>
        ))}
      </div>
    </RadioQuestionsBox>
  );
};
export default DescriptionQuestion;
