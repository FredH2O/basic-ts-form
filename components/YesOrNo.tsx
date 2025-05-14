import { MouseEvent } from "react";

type Props = {
  question: string;
  name: string;
  yesValue: string;
  noValue: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const YesOrNo = ({ question, name, yesValue, noValue, onClick }: Props) => {
  return (
    <div>
      <p>{question}</p>
      <div className="flex justify-evenly">
        <button
          name={name}
          value={yesValue}
          onClick={onClick}
          className="hover:cursor-pointer hover:-translate-y-1 hover:text-black transition-all duration-200 hover:bg-blue-600 px-5 py-1 rounded bg-blue-500"
        >
          Yes
        </button>
        <button
          name={name}
          value={noValue}
          onClick={onClick}
          className="hover:cursor-pointer hover:-translate-y-1 hover:text-black transition-all duration-200 hover:bg-blue-600 px-5 py-1 rounded bg-blue-500"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default YesOrNo;
