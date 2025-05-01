import { type ChangeEvent } from "react";
import { FormValues } from "../../app/context/FormContext";
import Input from "../Input";

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
        <option value=""> -- Select -- </option>
        <option value="introvert">Stay Calm 🌿</option>
        <option value="extrovert">Dive in and figure it out as I go 🔧</option>
        <option value="peacemaker">Asking for advice 🙏🏻</option>
        <option value="perfectionist">Google the problem 💻</option>
        <option value="Other">Other &#40;please specify&#41; 🤔</option>
      </select>
      {otherAnswer && (
        <Input
          name="challengesOther"
          className="bg-white text-black p-2 rounded"
          type="text"
          placeholder="Other"
          onChange={onChange}
          value={challenges}
        />
      )}
    </div>
  );
};

export default ChallangesQuestion;
