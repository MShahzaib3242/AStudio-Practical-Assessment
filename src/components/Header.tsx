import { Link, useLocation } from "react-router-dom";

import { AStudio } from "../assets";
import { headerLinks } from "../utils/constants/header";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 text-gray-800 bg-white shadow-lg">
      <div className="container px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between w-full gap-4 text-lg font-bold text-center sm:flex-row sm:gap-8">
          <Link to={"/"} className="flex items-center gap-4">
            <img
              src={AStudio}
              alt="AStudio"
              width={30}
              className="block sm:hidden"
            />
            <span>ASTUDIO Practical Assessment</span>
          </Link>
          <Link to={"/"}>
            <img
              src={AStudio}
              alt="AStudio"
              width={50}
              className="hidden sm:block"
            />
          </Link>

          <div className="flex items-center gap-4">
            {headerLinks?.map((link) => (
              <Link
                to={link.href}
                className={`${
                  location.pathname === link.href
                    ? "bg-primaryYellow"
                    : "hover:text-primaryYellow"
                } px-4 py-1 text-primaryBlack rounded transition-all`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
