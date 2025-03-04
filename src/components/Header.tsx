import { useLocation } from "react-router-dom";
import { AStudio } from "../assets";

const Header: React.FC = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <header className="bg-white text-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 py-4 container">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 sm:gap-8 text-center font-bold text-lg">
          <div className="flex items-center gap-4">
            <img
              src={AStudio}
              alt="AStudio"
              width={30}
              className="block sm:hidden"
            />
            <span>ASTUDIO Practical Assessment</span>
          </div>

          <img
            src={AStudio}
            alt="AStudio"
            width={50}
            className="hidden sm:block"
          />
          <div className="flex items-center gap-4">
            <a
              href="/users"
              className={`${
                location.pathname === "/users"
                  ? " bg-primaryYellow "
                  : "hover:text-primaryYellow"
              } px-4 py-1 text-primaryBlack rounded transition-all`}
            >
              Users
            </a>
            <a
              href="/products"
              className={`${
                location.pathname === "/products"
                  ? " bg-primaryYellow "
                  : "hover:text-primaryYellow"
              } px-4 py-1 text-primaryBlack rounded transition-all`}
            >
              Products
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
