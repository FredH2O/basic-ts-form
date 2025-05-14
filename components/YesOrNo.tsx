import { FormEvent } from "react";

type Props = {
  question: string;
  value: string;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
};

const YesOrNo = ({ question, value, onClick }: Props) => {
  return (
    <div>
      <p>{question}</p>
      <div>
        <button value={value} onClick={onClick} className="">
          Yes
        </button>
        <button value={value} onClick={onClick} className="">
          No
        </button>
      </div>
    </div>
  );
};

export default YesOrNo;
