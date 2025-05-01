import { type ChangeEvent } from "react";
import { FormValues } from "../../app/context/FormContext";
import Input from "../Input";
import { CHALLENGES } from "../../const/constants";

type Props = {
  onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  otherAnswer: boolean;
  challenges: FormValues["challenges"];
};

const ChallangesQuestion = ({ onChange, otherAnswer, challenges }: Props) => {
  return (
    <div className="flex flex-col gap-2 p-1">
      <label htmlFor="challanges" className="text-2xl">
        How do you typically handle challanges?
      </label>
      <select
        name="challenges"
        id="challanges"
        className="rounded text-black bg-white p-1"
        onChange={onChange}
        value={challenges}
      >
        {CHALLENGES.map((answer) => (
          <option
            disabled={answer.value === ""}
            key={answer.key}
            value={answer.value}
          >
            {answer.title}
          </option>
        ))}
      </select>

      {otherAnswer && (
        <Input
          name="challengesOther"
          className="bg-white text-black p-2 rounded"
          type="text"
          placeholder="What other could it be? 🤔"
          onChange={onChange}
          value={challenges}
        />
      )}
    </div>
  );
};

export default ChallangesQuestion;
