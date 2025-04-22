import type { ChangeEvent } from "react";
import { FormValues } from "../Form";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: FormValues["name"];
};

const NameQuestion = ({ onChange, name }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="name">What's your name?</label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        className="border p-2 bg-white rounded text-black"
      />
    </div>
  );
};

export default NameQuestion;
