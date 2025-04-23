import Link from "next/link";
import { FormEvent, ReactNode } from "react";

type FormSectionProp = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  next: string;
};

const FormSection = ({ onSubmit, children, next }: FormSectionProp) => {
  return (
    <div className="flex justify-center items-center h-screen px-3">
      <form
        onSubmit={onSubmit}
        className="container p-3 bg-neutral-700 m-auto max-w-md rounded flex flex-col justify-center items-center"
      >
        <fieldset className="border w-full p-3 rounded">
          <legend className="p-1 text-2xl">Tell us about yourself?</legend>

          <div className="flex flex-col justify-start max-w-sm space-y-1">
            {children}
          </div>
        </fieldset>
        <Link href={next}>
          <button className="hover:cursor-pointer hover:bg-blue-600 bg-blue-500 px-3 py-1 rounded mt-3">
            Next Page
          </button>
        </Link>
      </form>
    </div>
  );
};

export default FormSection;
