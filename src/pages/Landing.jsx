import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { Button } from "@/components/ui/button";
const LandingPage = () => {
  return (
    
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-10 ">
      <section className="text-center ">
        <h1 className="flex flex-col text-4xl sm:text-6xl py-4 font-bold   lg:text-8xl items-center justify-center gradient-title">
          <span className="flex flex-row">
            Welcome to
            <img src={logo} alt="logo" className="h-14 -mt-6 sm:h-24 lg:h-32" />
            and
          </span>
          <span className="sm:-mt-0 md:-mt-4 -mt-2 ">get a job </span>
        </h1>
        <p className="text-gray-300 text-xs sm:text-xl  sm:mt-4">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="">
        <Link to="/jobs">
          <Button>Find Jobs</Button>
        </Link>
        <Link to="/jobs">
          <Button>Post a Job</Button>
        </Link>
      </div>
      <section className=""></section>
    </main>
  );
};

export default LandingPage;
