import { ChangeEvent, FormEvent } from "react";

type Props = {
  id: string;
  name: string;
  value: string;
  description: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxesQuestion = ({
  id,
  name,
  value,
  description,
  checked,
  onChange,
}: Props) => {
  const handleInvalid = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.setCustomValidity("Please check one of the boxes");
  };

  return (
    <div className="">
      <div>
        <input
          className="mr-2 cursor-pointer"
          required
          onInvalid={handleInvalid}
          type="checkbox"
          value={value}
          name={name}
          id={id}
          onChange={onChange}
          checked={checked}
        />
        <label
          className="text-sm cursor-pointer hover:text-blue-500 transition-all duration-
          200"
          htmlFor={id}
        >
          {description}
        </label>
      </div>
    </div>
  );
};

export default CheckboxesQuestion;
