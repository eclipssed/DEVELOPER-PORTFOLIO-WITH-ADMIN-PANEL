"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const navLinks = [
  {
    href: "#about",
    title: "About",
  },
  {
    href: "/landing-page/projects",
    title: "Projects",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

const Navbar = ({ logo }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-10 relative ease-out  ${
        isSticky
          ? " ease-in sticky top-0 left-0 right-0 border-b border-b-light bg-[#121212] bg-opacity-80"
          : ""
      }`}
    >
      <div
        className={`flex flex-wrap items-center justify-between mx-auto py-4 px-6 md:px-16 duration-300`}
      >
        <Link href={"/"} className="text-2xl md:text-5xl font-bold">
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {logo}
          </span>
        </Link>
        {/* menu for large devices */}
        <div className=" hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden ">
          <div
            onClick={toggleMenu}
            className="text-light focus:outline-none focus:text-gray-500"
          >
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6 " />
            ) : (
              <FaBars className="w-6 h-6 " />
            )}
          </div>
        </div>
      </div>
      {/* menu for mobile devices */}
      <div className="md:hidden block text-center">
        {isMenuOpen && (
          <div
            className={` bg-dark w-full bg-opacity-70 ${
              isMenuOpen ? "border-b" : ""
            } absolute p-4 z-10`}
          >
            {isMenuOpen && (
              <ul>
                {navLinks.map((link, index) => (
                  <li key={index} onClick={toggleMenu}>
                    <NavLink href={link.href} title={link.title} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
