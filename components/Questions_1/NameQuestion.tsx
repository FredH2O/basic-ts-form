import type { ChangeEvent } from "react";
import { FormValues } from "../../app/context/FormContext";
import Input from "../Input";

type Props = {
  name: FormValues["name"];
};

const NameQuestion = ({ name }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="text-2xl" htmlFor="name">
        What should we call you?
      </label>
      <Input id="name" type="text" name="name" value={name} />
    </div>
  );
};

export default NameQuestion;
