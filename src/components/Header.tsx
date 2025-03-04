import { AStudio } from "../assets";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-gray-800 sticky top-0 z-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-center gap-4 text-center font-bold text-lg">
          <img src={AStudio} alt="AStudio" width={50} />
          ASTUDIO Practical Assessment
        </div>
      </div>
    </header>
  );
};

export default Header;
