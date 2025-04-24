import { type ChangeEvent } from "react";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const DescriptionQuestion = ({ onChange }: Props) => {
  return (
    <div className="p-1">
      <p className="text-2xl pb-3">How do you usually describe yourself?</p>
      <div className="flex flex-col space-y-1">
        <label htmlFor="chillQuiet">
          <input
            type="radio"
            value="Chill and Quiet"
            onChange={onChange}
            placeholder="Yes"
            className="mr-2"
            name="description"
            id="chillQuiet"
          />
          Chill and Quiet 🌿
        </label>

        <label htmlFor="outgoingTalkative">
          <input
            value="Outgoing and Talkative"
            type="radio"
            onChange={onChange}
            className="mr-2"
            name="description"
            id="outgoingTalkative"
          />
          Outgoing and Talkative 🔥
        </label>

        <label htmlFor="both">
          <input
            value="Both"
            type="radio"
            onChange={onChange}
            className="mr-2"
            name="description"
            id="both"
          />
          A mix of both 🗻
        </label>

        <label htmlFor="notSure">
          <input
            value="Not Sure"
            type="radio"
            onChange={onChange}
            className="mr-2"
            name="student"
            id="notSure"
          />
          Not sure yet 🤔
        </label>
      </div>
    </div>
  );
};
export default DescriptionQuestion;
