import { Link } from "react-router-dom";
import { Hero } from "../assets";

const Home = () => {
  return (
    <section className="flex items-center h-custom">
      <div className="container flex items-center justify-between w-full px-8 mx-auto lg:flex">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left lg:w-1/2">
          <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
            Welcome to the <span className="text-primaryYellow">AStudio</span>{" "}
            Practical Assessment
          </h1>
          <p className="text-xl font-light lg:text-2xl">
            After clicking on the buttons below you will be able to see Users &
            Products list table with the filteration.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to={"/users"}
              className="px-12 py-4 text-white transition-all rounded bg-primaryBlack hover:bg-primaryBlack/60"
            >
              View Users
            </Link>
            <Link
              to={"/products"}
              className="px-12 py-4 transition-all rounded text-primaryBlack bg-primaryYellow hover:bg-primaryYellow/60"
            >
              View Products
            </Link>
          </div>
        </div>
        <div className="hidden w-1/2 md:block">
          <img src={Hero} alt="Hero Image" className="opacity-5" />
        </div>
      </div>
    </section>
  );
};

export default Home;
