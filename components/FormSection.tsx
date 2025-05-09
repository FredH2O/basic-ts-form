import Link from "next/link";
import { FormEvent, ReactNode } from "react";

type FormSectionProp = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  next?: string;
  previous?: string;
  result?: string;
  closeResult?: (e: FormEvent<HTMLButtonElement>) => void;
};

const FormSection = ({
  onSubmit,
  children,
  next,
  previous,
  result,
  closeResult,
}: FormSectionProp) => {
  return (
    <div className="relative flex justify-center items-center h-screen px-3">
      {result && (
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center bg-black opacity-90 inset-0 border">
          <p>You're a {result}</p>
          <button
            className="hover:cursor-pointer hover:bg-blue-800 px-2 py-1 rounded-xl bg-blue-600"
            onClick={closeResult}
            type="button"
          >
            Close
          </button>
        </div>
      )}

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

        <div
          className={`flex ${
            previous ? "justify-between" : "justify-center"
          } items-center p-3 w-full`}
        >
          {/* Check if previous is truthy */}
          {previous && (
            <Link
              className="hover:cursor-pointer hover:bg-blue-600 bg-blue-500 px-3 py-1 rounded"
              href={previous}
            >
              Previous Page
            </Link>
          )}

          {/* Check if Next is truthy otherwise output Submit the whole question */}

          {next ? (
            <Link
              className="hover:cursor-pointer hover:bg-blue-600 bg-blue-500 px-3 py-1 rounded"
              href={next}
            >
              Next Page
            </Link>
          ) : (
            <button
              type="submit"
              className="hover:cursor-pointer hover:bg-blue-600 bg-blue-500 px-3 py-1 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormSection;
