import { ReactNode } from "react";

type Prop = {
  children: ReactNode;
  title: string;
};

const RadioQuestionsBox = ({ children, title }: Prop) => {
  return (
    <div className="p-1">
      <p className="text-2xl pb-3">{title}</p>
      <div className="flex flex-col space-y-1 text-sm">{children}</div>
    </div>
  );
};

export default RadioQuestionsBox;
