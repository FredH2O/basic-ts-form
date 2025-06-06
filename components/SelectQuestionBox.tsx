import { type ChangeEvent } from "react";

type QuestionOptions = {
  title: string;
  value: string;
  key: number;
};

type QuestionsProp = {
  questions: ReadonlyArray<QuestionOptions>;
  title: string;
  name: string;
  id: string;
  ariaLabel: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectQuestionBox = ({
  questions,
  title,
  name,
  id,
  ariaLabel,
  value,
  onChange,
}: QuestionsProp) => {
  return (
    <>
      <label htmlFor={id} className="text-2xl">
        {title}
      </label>
      <select
        name={name}
        id={id}
        value={value}
        className="rounded text-black bg-white p-1"
        onChange={onChange}
        aria-label={ariaLabel}
      >
        {questions.map((question) => (
          <option
            className="text-sm"
            hidden={question.value === ""}
            disabled={question.value === ""}
            key={question.key}
            value={question.value}
          >
            {question.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectQuestionBox;
