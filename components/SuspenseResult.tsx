import PersonalityDescription from "./PersonalityDescription";
import { FormEvent, useState, useEffect } from "react";
import Loading from "./Loading";

type Props = {
  result: string;
  name?: string;
  closeResult?: (e: FormEvent<HTMLButtonElement>) => void;
};

const SuspenseResult = ({ result, name, closeResult }: Props) => {
  const [suspense, setSuspense] = useState(false);

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setSuspense(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [result]);

  const capitalizedName = name
    ? name?.charAt(0).toUpperCase() + name?.slice(1)
    : "";

  const capitalizedResult = result
    ? result.charAt(0).toUpperCase() + result.slice(1)
    : "";

  return (
    <>
      {suspense ? (
        <div className="justify-center items-center flex flex-col gap-3">
          <p className="text-xl">
            <span>{capitalizedName}</span>{" "}
            {`you're ${
              result === "introvert" ||
              result === "extrovert" ||
              result === "optimist"
                ? "an"
                : "a"
            } `}
            <span className="font-bold italic">{capitalizedResult}</span> !
          </p>
          <PersonalityDescription personality={result} />
          <button
            className="hover:cursor-pointer hover:bg-blue-800 px-5 py-1 rounded bg-blue-500"
            onClick={closeResult}
            type="button"
          >
            Close
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SuspenseResult;
