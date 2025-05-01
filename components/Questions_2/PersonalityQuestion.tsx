import { PERSONALITY_TRAITS } from "../../const/constants";
import type { ChangeEvent } from "react";
import Input from "../Input";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Personality = ({ onChange }: Props) => {
  return (
    <div className="flex flex-col justify-center gap-1">
      <p className="text-2xl p-1">What type of friend do you prefer?</p>
      {PERSONALITY_TRAITS.map((personality) => (
        <div key={personality.id} className="flex gap-2 hover:text-blue-500 ">
          <Input
            onChange={onChange}
            className="hover:cursor-pointer"
            type="radio"
            id={personality.title}
            name="personality"
            value={personality.value}
          />
          <label className="hover:cursor-pointer" htmlFor={personality.title}>
            {personality.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Personality;
