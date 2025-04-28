import type { ChangeEvent } from "react";
import { FormValues } from "../../app/context/FormContext";
import Input from "../Input";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: FormValues["name"];
};

const NameQuestion = ({ onChange, name }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="text-2xl" htmlFor="name">
        What should we call you?
      </label>
      <Input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
    </div>
  );
};

export default NameQuestion;
