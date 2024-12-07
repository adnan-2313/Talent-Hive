import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-gray-600  max-sm:leading-tight  text-center p-10 bg-[#0c0a09] mt-10 text-2xl font-semibold text-gradient">
      <div className="flex flex-row justify-center gap-2 ">
        Built By - 
        <a href="https://adnankhanportfolio.vercel.app/" target="_adnan">
          <p className="gradient-title flex flex-row justify-center gap-2 text-gray-400">
          Adnan Khan
            <img
              src="https://avatars.githubusercontent.com/u/154580027?v=4"
              alt=""
              className="rounded-full size-10 "
            />
          </p>
        </a>
      </div>
      <a
        href="https://github.com/adnan-2313/Talent-Hive"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer gap-2 leading-6 flex items-center justify-center sm:flex-row flex-col"
      >
        <span className=""> Source code available at </span>
        <span className="text-gray-400 gradient-title">adnan-2313/Talent-Hive</span>
      </a>
    </footer>
  );
};

export default Footer;
