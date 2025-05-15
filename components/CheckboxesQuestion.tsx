type Props = {
  id: string;
  name: string;
  value: string;
  description: string;
  key: number;
};

const CheckboxesQuestion = ({ id, name, value, description, key }: Props) => {
  return (
    <div className="">
      <div key={key}>
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
