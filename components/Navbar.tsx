"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-2 shadow-md px-4 fixed w-full bg-black/90 ">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Assignment</h1>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden px-2 text-2xl"
        >
          {open ? "✖" : "☰"}
        </button>
        <ul
          className={`md:flex gap-6 md:static absolute md:bg-transparent bg-black/90 md:bg-none px-4 rounded left-2 right-6 md:p-0  md:mr-4 ${
            open ? "top-14" : "top-[-300]"
          }`}
          onClick={() => setOpen(!open)}
        >
          <li>
            <Link
              href="/"
              className={`${path} === "/" ?"text-blue-500 font-bold":"" hover:text-emerald-500 -all duration-200`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`
            ${path} === "/about" ?"text-blue-500 font-bold":"" hover:text-emerald-500 transition-all duration-200
            `}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`${path} === "/services" ?"text-blue-500 font-bold":""
              hover:text-emerald-500 transition-all duration-200

              `}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`
              ${path} === "/contact" ?"text-blue-500 font-bold":""
               hover:text-emerald-500 transition-all duration-200
              `}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
