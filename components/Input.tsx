import { ChangeEvent, forwardRef, InputHTMLAttributes } from "react";
import { useFormContext } from "../app/context/FormContext";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, onChange, value, ...props }, ref) => {
    const { submitQuestion, handleChange } = useFormContext();

    const handleCombineChanges = (e: ChangeEvent<HTMLInputElement>) => {
      handleChange(e);
      onChange?.(e);
    };

    return (
      <input
        {...props}
        className={`border m-1 p-2 text-2xl font-light bg-white rounded text-black ${props.className}`}
        ref={ref}
        name={name}
        onChange={handleCombineChanges}
        value={
          value ??
          (name ? submitQuestion[name as keyof typeof submitQuestion] : "")
        }
      />
    );
  }
);

export default Input;
