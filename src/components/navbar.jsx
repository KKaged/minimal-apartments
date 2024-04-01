import { Link, useLocation } from "react-router-dom";

const links = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Apartments",
    path: "/apartments",
  },
  {
    id: 3,
    name: "About Us",
    path: "/about-us",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
];

const useIsActive = (path) => {
  const location = useLocation();
  return location.pathname === path;
};

export default function Navbar({
  navHeader,
  className,
  buttonStyle,
  headerStyle,
  header,
}) {
  return (
    <>
      <header
        className="flex flex-col px-32"
        style={{ backgroundImage: `url(${navHeader})` }}
      >
        <nav className={className}>
          <h1 className="text-2xl">MiniMAL</h1>
          <ul className="flex justify-center space-x-4 gap-10">
            {links.map((link) => (
              <li key={link.id} className="">
                <Link
                  to={link.path}
                  className={
                    useIsActive(link.path)
                      ? `underline underline-offset-8`
                      : " font-light"
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className={buttonStyle}>CONTACT</button>
        </nav>
        <h1 className={headerStyle}>{header}</h1>
      </header>
    </>
  );
}
