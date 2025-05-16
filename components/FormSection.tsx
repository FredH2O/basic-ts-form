import Link from "next/link";
import { FormEvent, ReactNode } from "react";
import SuspenseResult from "./SuspenseResult";
import Form from "./FirstForm";

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
      <Form />
    </div>
  );
};

export default FormSection;
