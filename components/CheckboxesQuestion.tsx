type Props = {
  id: string;
  name: string;
  value: string;
  description: string;
};

const CheckboxesQuestion = ({ id, name, value, description }: Props) => {
  return (
    <div className="">
      <div>
        <input
          className="mr-2 cursor-pointer"
          type="checkbox"
          value={value}
          name={name}
          id={id}
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
