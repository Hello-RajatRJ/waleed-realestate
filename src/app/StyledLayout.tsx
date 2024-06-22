"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.svg";



const StyledLayout = (props:any) => {
  const { children } = props || {};
  return (
    <div>
      <header className="bg-[#381909] text-white py-4 px-24">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Image src={logo} alt={""} />
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <footer className="bg-[#381909] text-white p-4">
        <div className="container mx-auto text-center">
          <p>© 2024 General Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StyledLayout;
