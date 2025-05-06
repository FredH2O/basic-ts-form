import { PERSONALITY_TRAITS } from "../../const/constants";

import Input from "../Input";
import RadioQuestionsBox from "../RadioQuestionsBox";

const Personality = () => {
  return (
    <RadioQuestionsBox title="What type of friend do you prefer?">
      {PERSONALITY_TRAITS.map((personality) => (
        <div key={personality.key} className="flex gap-2 hover:text-blue-500 ">
          <Input
            className="hover:cursor-pointer"
            type="radio"
            id={personality.value}
            name="personality"
            value={personality.value}
          />
          <label htmlFor={personality.value} className="hover:cursor-pointer">
            {personality.title}
          </label>
        </div>
      ))}
    </RadioQuestionsBox>
  );
};

export default Personality;
