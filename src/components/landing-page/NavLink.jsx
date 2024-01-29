import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block text-white py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-light"
    >
      {title}
    </Link>
  );
};

export default NavLink;
