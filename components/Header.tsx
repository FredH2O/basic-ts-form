import Image from "next/image";
import { ReactNode } from "react";

type HeaderProps = {
  img: { src: string; alt: string };
  title: string;
  children?: ReactNode;
};

const Header = ({ img, title, children }: HeaderProps) => {
  return (
    <header className="flex justify-center items-center gap-2 p-3 opacity-90 text-neutral-300">
      <Image
        src={img.src}
        alt={img.alt}
        width={50}
        height={50}
        className="rounded"
      />
      <h1 className="text-2xl">{title}</h1>
      {children}
    </header>
  );
};

export default Header;
