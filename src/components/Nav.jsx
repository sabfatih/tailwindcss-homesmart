import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Nav = () => {
  const [burgerVisible, setBurgerVisible] = useState(false);

  return (
    <nav className="mx-auto p-4 bg-amber-400 text-neutral-900">
      <div className="container mx-auto flex justify-between">
        <Logo />
        <div
          className={`${
            burgerVisible ? "flex" : "hidden"
          } w-full absolute lg:static bg-amber-400 flex-col left-0 mt-10 justify-between gap-4 p-6 items-center lg:flex lg:flex-row lg:mt-0`}
        >
          <NavItem title={"Home"} />
          <NavItem title={"Contact"} />
          <NavItem title={"Login"} />
          <NavItem title={"Sign Up"} />
        </div>
        <ToggleBurger setBurgerVisible={setBurgerVisible} />
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <a
      href="/"
      className="focused lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-8 hover:opacity-75 transition-opacity cursor-pointer w-max"
      aria-label="Go to Home page"
    >
      <img
        src={logo}
        alt="Home Smart Logo"
        width={200}
        className="w-48 md:w-64 lg:w-72"
      />
    </a>
  );
};

const NavItem = ({ title }) => {
  return (
    <a
      href="/"
      className={`hover:opacity-75 transition-opacity cursor-pointer py-1 px-6 text-xl ${
        title === "Contact" ? "lg:mr-auto border-b-2 border-amber-500" : ""
      } ${
        title === "Sign Up" ? "bg-teal-900 text-white rounded-lg py-2 px-3" : ""
      }`}
    >
      {title}
    </a>
  );
};

const ToggleBurger = ({ setBurgerVisible }) => {
  return (
    <button
      onClick={() => setBurgerVisible((prev) => !prev)}
      className="lg:hidden focused"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 md:size-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
};

export default Nav;
