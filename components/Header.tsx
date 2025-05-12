import Image from "next/image";
import { ReactNode } from "react";

type HeaderProps = {
  img: { src: string; alt: string };
  title: string;
  children?: ReactNode;
};

const Header = ({ img, title, children }: HeaderProps) => {
  return (
    <header className="gap-2 p-3 opacity-90 text-neutral-300">
      <div className="flex items-center justify-center gap-3">
        <Image
          src={img.src}
          alt={img.alt}
          width={50}
          height={50}
          className="rounded cursor-pointer hover:bg-green-400 p-1 transition-all duration-300"
        />
        <h1 className="text-2xl cursor-pointer hover:text-green-400 transition-all duration-300">
          {title}
        </h1>
      </div>

      {children}
    </header>
  );
};

export default Header;
