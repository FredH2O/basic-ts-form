const Footer = () => {
  return (
    <footer className="w-full my-5 py-4 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} Personality Checker — built with 💙, ☕,
        and TypeScript.
      </p>
      <p className="mt-1">
        Made by a curious mind, exploring one trait at a time.
      </p>
    </footer>
  );
};

export default Footer;
