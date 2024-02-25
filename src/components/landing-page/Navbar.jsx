"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { getText } from "@/libs/data";

const navLinks = [
  {
    href: "/landing-page/about",
    title: "About",
  },
  {
    href: "/landing-page/projects",
    title: "Projects",
  },
  {
    href: "/landing-page/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logo, setLogo] = useState("");
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    getText()
      .then((data) => JSON.parse(data))
      .then((data) => setLogo(data.logo));
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
    <header className=" w-full bg-transparent ease-linear fixed top-0 left-0 right-0 z-30">
      <nav
        className={` ${
          isSticky
            ? "sticky top-0 left-0 right-0 py-1  border-b border-b-light bg-[#121212] opacity-90 transition-all  duration-300"
            : "py-2"
        }`}
      >
        <div
          className={`flex container px-4 lg:px-16 flex-wrap items-center justify-between mx-auto py-4 duration-300`}
        >
          <Link href={"/"} className="text-3xl md:text-5xl font-bold">
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
              className={` bg-dark w-full opacity-90 ${
                isMenuOpen ? "border-b" : ""
              } absolute p-4 z-10`}
            >
              {isMenuOpen && (
                <ul className="space-y-6">
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
    </header>
  );
};

export default Navbar;
