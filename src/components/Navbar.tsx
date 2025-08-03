import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { NAVIGATION_ITEMS, SITE_CONFIG, UI_CONSTANTS } from "@/constants";
import Link from "next/link";

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {NAVIGATION_ITEMS.map((item) => (
        <Typography
          key={item.href}
          as="li"
          variant="small"
          className="p-1 font-normal"
        >
          <Link href={item.href} className="flex items-center">
            {item.label}
          </Link>
        </Typography>
      ))}
    </ul>
  );
 
  return (
    <Navbar 
      className={`mx-auto max-w-screen-xl py-4 px-6 lg:px-8 lg:py-4 ${UI_CONSTANTS.colors.primary} rounded-none outline-2 outline`}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-extrabold text-2xl text-white"
        >
          {SITE_CONFIG.name}
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-brown-100"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </Collapse>
    </Navbar>
  );
}