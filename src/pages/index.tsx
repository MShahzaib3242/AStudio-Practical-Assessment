import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex items-center h-custom">
      <div className="container px-8 mx-auto lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
            Welcome to the AStudio Practical Assessment
          </h1>
          <p className="mt-6 text-xl font-light lg:text-2xl">
            After clicking `Get Started` you will be able to see User & products
            list table with the filteration.
          </p>
          <p className="mt-8 md:mt-12">
            <Link
              to={"/users"}
              className="px-12 py-4 text-white bg-teal-500 rounded hover:bg-teal-600"
            >
              Get Started
            </Link>
          </p>
          <p className="mt-4 text-gray-600">Click to view the assessment</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
