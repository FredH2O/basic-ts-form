import Link from "next/link";
import { FormEvent, ReactNode, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  next?: string;
  previous?: string;
  result?: string;
  closeResult?: (e: FormEvent<HTMLButtonElement>) => void;
  name?: string;
};

const Form = ({ onSubmit, children, previous, next }: Props) => {
  return (
    <motion.form
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
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
    </motion.form>
  );
};

export default Form;
