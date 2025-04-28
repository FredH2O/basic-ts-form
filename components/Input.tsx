import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={`border p-2 bg-white rounded text-black ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
