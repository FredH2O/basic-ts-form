import { PERSONALITY_TRAITS } from "../../const/constants";
import type { ChangeEvent } from "react";
import Input from "../Input";
import RadioQuestionsBox from "../RadioQuestionsBox";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Personality = ({ onChange }: Props) => {
  return (
    <RadioQuestionsBox title="What type of friend do you prefer?">
      {PERSONALITY_TRAITS.map((personality) => (
        <div key={personality.key} className="flex gap-2 hover:text-blue-500 ">
          <Input
            onChange={onChange}
            className="hover:cursor-pointer"
            type="radio"
            id={personality.title}
            name="personality"
            value={personality.value}
          />
          <label htmlFor={personality.title} className="hover:cursor-pointer">
            {personality.title}
          </label>
        </div>
      ))}
    </RadioQuestionsBox>
  );
};

export default Personality;
