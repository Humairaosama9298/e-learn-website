"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear, faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <main>
      <nav className="p-3 flex bg-[#b2ebf2] bg-opacity-55 justify-between items-center">
        <a href="#" className="flex  items-center">
          <Image
            className="object-cover max-w-20 max-h-20 md:max-w-28 md:max-h-28"
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <span className="text-lg font-medium font-display">Online Learn</span>
        </a>
        <div className="hidden lg:flex gap-12">
          <Link
            href="/"
            className="font-medium hover:text-[#00838f] hover:border-b-4 border-[#00bcd4]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-medium hover:text-[#00838f] hover:border-b-4 border-[#00bcd4]"
          >
            About{" "}
          </Link>
          <Link
            href="/courses"
            className="font-medium hover:text-[#00838f] hover:border-b-4 border-[#00bcd4]"
          >
            Courses
          </Link>
          <Link
            href="../services"
            className="font-medium hover:text-[#00838f] hover:border-b-4 border-[#00bcd4]"
          >
            Services
          </Link>
          <Link
            href="../contact"
            className="font-medium hover:text-[#00838f] hover:border-b-4 border-[#00bcd4]"
          >
            Contact
          </Link>
        </div>
        <div className="hidden p-5 lg:flex gap-5 items-center">
          <Button>Login</Button>
          <Button>Register</Button>
          <FontAwesomeIcon icon={faGear} />
        </div>
        <Button
          className="p-2 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faX : faBars} />
        </Button>
        <div
          className={`fixed z-10 bg-[#00838f] inset-0 p-3 lg:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center">
              <Image
                className="object-cover max-w-20 max-h-20 md:max-w-28 md:max-h-28"
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
              />
              <span className="text-lg font-medium font-display">
                Online Learn
              </span>
            </a>
            <Button
              className="p-2 md:hidden"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faX} />
            </Button>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <Link
              href="/"
              className="font-medium px-20 m-3 p-2 hover:bg-[#b2ebf2] bg-opacity-90 block rounded-xl"
            >
              home
            </Link>
            <Link
              href="/about"
              className="font-medium px-20 m-3 p-2 hover:bg-[#b2ebf2] bg-opacity-90 block rounded-xl"
            >
              About
            </Link>
            <Link
              href="/courses"
              className="font-medium px-20 m-3 p-2 hover:bg-[#b2ebf2] bg-opacity-90 block rounded-xl"
            >
              Courses
            </Link>
            <Link
              href="/services"
              className="font-medium px-20 m-3 p-2 hover:bg-[#b2ebf2] bg-opacity-90  block rounded-xl"
            >
              services
            </Link>
            <Link
              href="/contact"
              className="font-medium px-20 m-3 p-2 hover:bg-[#b2ebf2] bg-opacity-90 rounded-xl"
            >
              contact
            </Link>
          </div>
          <div>
            <div className=" flex flex-col p-10 gap-8">
              <Button
                variant="outline"
                className="text-[#b2ebf2] border-[#b2ebf2] rounded-xl hover:bg-[#b2ebf2] hover:border-none"
              >
                Login
              </Button>
              <Button className="bg-[#b2ebf2]  hover:bg-[#00838f] focus:ring-2 focus:ring-[#b2ebf2] rounded-xl hover:text-[#b2ebf2]">
                Register
              </Button>
              <FontAwesomeIcon icon={faGear} />
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
