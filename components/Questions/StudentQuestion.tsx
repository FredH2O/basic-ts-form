import { type ChangeEvent } from "react";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean | undefined;
};

const StudentQuestion = ({ onChange, checked }: Props) => {
  return (
    <div>
      <span className="mb-3 text-2xl">Are you a student?</span>
      <div className="flex flex-col">
        <label htmlFor="student-yes" className="">
          <input
            type="radio"
            value="true"
            onChange={onChange}
            placeholder="Yes"
            className="mr-2"
            name="student"
            id="student"
            checked={checked === true}
          />
          Yes
        </label>

        <label htmlFor="student-no">
          <input
            value="false"
            type="radio"
            onChange={onChange}
            className="mr-2"
            name="student"
            id="student"
            checked={checked === false}
          />
          No
        </label>
      </div>
    </div>
  );
};
export default StudentQuestion;
