import { type ChangeEvent } from "react";
import { FormValues } from "../../app/context/FormContext";

type Props = {
  onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  otherAnswer: boolean;
  transportation: FormValues["transportation"];
};

const CommuteQuestion = ({ onChange, otherAnswer, transportation }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="commute">Do you commute by:</label>
      <select
        name="transportation"
        id="commute"
        className="rounded text-black bg-white p-1"
        onChange={onChange}
        value={transportation}
      >
        <option value=""> -- Select -- </option>
        <option value="Bus">Bus 🚌</option>
        <option value="Taxi">Taxi 🚕</option>
        <option value="Luás">Luás 🚃</option>
        <option value="Car">Car 🚗</option>
        <option value="Other">Other</option>
      </select>
      {otherAnswer && (
        <input
          name="transportationOther"
          className="bg-white text-black p-2 rounded"
          type="text"
          placeholder="Other"
          onChange={onChange}
          value={transportation}
        />
      )}
    </div>
  );
};

export default CommuteQuestion;
