import Link from "next/link";
import { FormEvent, ReactNode } from "react";
import SuspenseResult from "./SuspenseResult";

type FormSectionProp = {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  next?: string;
  previous?: string;
  result?: string;
  closeResult?: (e: FormEvent<HTMLButtonElement>) => void;
  name?: string;
};

const FormSection = ({
  onSubmit,
  children,
  next,
  previous,
  result,
  closeResult,
  name,
}: FormSectionProp) => {
  return (
    <div className="relative  flex justify-center items-center h-screen px-3">
      {result && (
        <div className="absolute top-0 left-0 inset-0">
          <div className="bg-black z-0 absolute opacity-70 inset-0"></div>
          <div className="flex flex-col max-w-md m-auto h-full justify-center">
            <div className="z-20 gap-3 justify-center items-center flex flex-col h-[500px] bg-gray-800 rounded-xl">
              <h2 className="text-3xl">The results are in.. </h2>
              {/* add suspense here like 2s */}
              <SuspenseResult
                result={result}
                name={name}
                closeResult={closeResult}
              />
            </div>
          </div>
        </div>
      )}

      <form
        onSubmit={onSubmit}
        className="container p-3 bg-neutral-700 m-auto max-w-md rounded flex flex-col justify-center items-center"
      >
        <fieldset className="border w-full p-3 mb-5 rounded">
          <legend className="p-1 text-2xl font-semibold text-white mb-3">
            Tell us about yourself?
          </legend>

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
              className="hover:cursor-pointer hover:-translate-y-1 hover:text-black transition-all duration-200 hover:bg-blue-600 px-5 py-1 rounded bg-blue-500"
              href={previous}
            >
              Previous Page
            </Link>
          )}

          {/* Check if Next is truthy otherwise output Submit the whole question */}

          {next ? (
            <Link
              className="hover:cursor-pointer hover:-translate-y-1 hover:text-black transition-all duration-200 hover:bg-blue-600 px-5 py-1 rounded bg-blue-500"
              href={next}
            >
              Next Page
            </Link>
          ) : (
            <button
              type="submit"
              className="hover:cursor-pointer hover:-translate-y-1 hover:text-black transition-all duration-200 hover:bg-blue-600 px-5 py-1 rounded bg-blue-500"
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
