import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
  Select,
  Option
} from "@material-tailwind/react";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const [colour, setColour] = useState<any>("blue-gray");
  const [intensity, setIntensity] = useState<any>("500");

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));

  }, [colour, intensity]);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="aboutme" className="flex items-center">
          About Me
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="requests" className="flex items-center">
          Song Requests
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="links" className="flex items-center">
          My Links
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="tip" className="flex items-center">
          Tip Me
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      // className="mx-auto max-w-screen-xl py-4 px-6 lg:px-8 lg:py-4 bg-deep-orange-900 rounded-none outline-2 outline outline-brown-700"
      // className="mx-auto max-w-screen-xl z-40 py-4 px-6 lg:px-8 lg:py-4 bg-brown-900 rounded-none outline-2 outline outline-brown-700"
      className={"mx-auto max-w-screen-xl py-4 px-6 lg:px-8 lg:py-4 rounded-none outline-2 outline outline-brown-700".concat(" bg-").concat(colour).concat('-').concat(intensity)}
    >
      <div className="colour-selector">

        <span className="bg-blue-gray-100">.</span><span className="bg-blue-gray-200">.</span><span className="bg-blue-gray-300">.</span><span className="bg-blue-gray-400">.</span><span className="bg-blue-gray-500">.</span><span className="bg-blue-gray-600">.</span><span className="bg-blue-gray-700">.</span><span className="bg-blue-gray-800">.</span><span className="bg-blue-gray-900">.</span><span className="bg-gray-100">.</span><span className="bg-gray-200">.</span><span className="bg-gray-300">.</span><span className="bg-gray-400">.</span><span className="bg-gray-500">.</span><span className="bg-gray-600">.</span><span className="bg-gray-700">.</span><span className="bg-gray-800">.</span><span className="bg-gray-900">.</span><span className="bg-brown-100">.</span><span className="bg-brown-200">.</span><span className="bg-brown-300">.</span><span className="bg-brown-400">.</span><span className="bg-brown-500">.</span><span className="bg-brown-600">.</span><span className="bg-brown-700">.</span><span className="bg-brown-800">.</span><span className="bg-brown-900">.</span><span className="bg-deep-orange-100">.</span><span className="bg-deep-orange-200">.</span><span className="bg-deep-orange-300">.</span><span className="bg-deep-orange-400">.</span><span className="bg-deep-orange-500">.</span><span className="bg-deep-orange-600">.</span><span className="bg-deep-orange-700">.</span><span className="bg-deep-orange-800">.</span><span className="bg-deep-orange-900">.</span><span className="bg-orange-100">.</span><span className="bg-orange-200">.</span><span className="bg-orange-300">.</span><span className="bg-orange-400">.</span><span className="bg-orange-500">.</span><span className="bg-orange-600">.</span><span className="bg-orange-700">.</span><span className="bg-orange-800">.</span><span className="bg-orange-900">.</span><span className="bg-red-100">.</span><span className="bg-red-200">.</span><span className="bg-red-300">.</span><span className="bg-red-400">.</span><span className="bg-red-500">.</span><span className="bg-red-600">.</span><span className="bg-red-700">.</span><span className="bg-red-800">.</span><span className="bg-red-900">.</span><span className="bg-pink-100">.</span><span className="bg-pink-200">.</span><span className="bg-pink-300">.</span><span className="bg-pink-400">.</span><span className="bg-pink-500">.</span><span className="bg-pink-600">.</span><span className="bg-pink-700">.</span><span className="bg-pink-800">.</span><span className="bg-pink-900">.</span><span className="bg-deep-purple-100">.</span><span className="bg-deep-purple-200">.</span><span className="bg-deep-purple-300">.</span><span className="bg-deep-purple-400">.</span><span className="bg-deep-purple-500">.</span><span className="bg-deep-purple-600">.</span><span className="bg-deep-purple-700">.</span><span className="bg-deep-purple-800">.</span><span className="bg-deep-purple-900">.</span><span className="bg-purple-100">.</span><span className="bg-purple-200">.</span><span className="bg-purple-300">.</span><span className="bg-purple-400">.</span><span className="bg-purple-500">.</span><span className="bg-purple-600">.</span><span className="bg-purple-700">.</span><span className="bg-purple-800">.</span><span className="bg-purple-900">.</span><span className="bg-indigo-100">.</span><span className="bg-indigo-200">.</span><span className="bg-indigo-300">.</span><span className="bg-light-blue-100">.</span><span className="bg-light-blue-200">.</span><span className="bg-light-blue-300">.</span><span className="bg-light-blue-400">.</span><span className="bg-light-blue-500">.</span><span className="bg-light-blue-600">.</span><span className="bg-light-blue-700">.</span><span className="bg-light-blue-800">.</span><span className="bg-light-blue-900">.</span><span className="bg-indigo-400">.</span><span className="bg-indigo-500">.</span><span className="bg-indigo-600">.</span><span className="bg-indigo-700">.</span><span className="bg-indigo-800">.</span><span className="bg-indigo-900">.</span><span className="bg-blue-100">.</span><span className="bg-blue-200">.</span><span className="bg-blue-300">.</span><span className="bg-blue-400">.</span><span className="bg-blue-500">.</span><span className="bg-blue-600">.</span><span className="bg-blue-700">.</span><span className="bg-blue-800">.</span><span className="bg-blue-900">.</span><span className="bg-cyan-100">.</span><span className="bg-cyan-200">.</span><span className="bg-cyan-300">.</span><span className="bg-cyan-400">.</span><span className="bg-cyan-500">.</span><span className="bg-cyan-600">.</span><span className="bg-cyan-700">.</span><span className="bg-cyan-800">.</span><span className="bg-cyan-900">.</span><span className="bg-teal-100">.</span><span className="bg-teal-200">.</span><span className="bg-teal-300">.</span><span className="bg-teal-400">.</span><span className="bg-teal-500">.</span><span className="bg-teal-600">.</span><span className="bg-teal-700">.</span><span className="bg-teal-800">.</span><span className="bg-teal-900">.</span><span className="bg-light-green-100">.</span><span className="bg-light-green-200">.</span><span className="bg-light-green-300">.</span><span className="bg-light-green-400">.</span><span className="bg-light-green-500">.</span><span className="bg-light-green-600">.</span><span className="bg-light-green-700">.</span><span className="bg-light-green-800">.</span><span className="bg-light-green-900">.</span><span className="bg-green-100">.</span><span className="bg-green-200">.</span><span className="bg-green-300">.</span><span className="bg-green-400">.</span><span className="bg-green-500">.</span><span className="bg-green-600">.</span><span className="bg-green-700">.</span><span className="bg-green-800">.</span><span className="bg-green-900">.</span><span className="bg-lime-100">.</span><span className="bg-lime-200">.</span><span className="bg-lime-300">.</span><span className="bg-lime-400">.</span><span className="bg-lime-500">.</span><span className="bg-lime-600">.</span><span className="bg-lime-700">.</span><span className="bg-lime-800">.</span><span className="bg-lime-900">.</span><span className="bg-yellow-100">.</span><span className="bg-yellow-200">.</span><span className="bg-yellow-300">.</span><span className="bg-yellow-400">.</span><span className="bg-yellow-500">.</span><span className="bg-yellow-600">.</span><span className="bg-yellow-700">.</span><span className="bg-yellow-800">.</span><span className="bg-yellow-900">.</span><span className="bg-amber-100">.</span><span className="bg-amber-200">.</span><span className="bg-amber-300">.</span><span className="bg-amber-400">.</span><span className="bg-amber-500">.</span><span className="bg-amber-600">.</span><span className="bg-amber-700">.</span><span className="bg-amber-800">.</span><span className="bg-amber-900">.</span>

        <Select label="select colour" className="z-0" onChange={(r) => { setColour(r) }}>
          <Option className={`bg-blue-gray-`.concat(intensity).concat(` text-black`)} value="blue-gray">blue-gray</Option>
          <Option className={`bg-gray-`.concat(intensity).concat(` text-black`)} value="gray">gray</Option>
          <Option className={`bg-brown-`.concat(intensity).concat(` text-black`)} value="brown">brown</Option>
          <Option className={`bg-deep-orange-`.concat(intensity).concat(` text-black`)} value="deep">deep-orange</Option>
          <Option className={`bg-orange-`.concat(intensity).concat(` text-black`)} value="orange">orange</Option>
          <Option className={`bg-amber-`.concat(intensity).concat(` text-black`)} value="amber">amber</Option>
          <Option className={`bg-yellow-`.concat(intensity).concat(` text-black`)} value="yellow">yellow</Option>
          <Option className={`bg-lime-`.concat(intensity).concat(` text-black`)} value="lime">lime</Option>
          <Option className={`bg-light-green-`.concat(intensity).concat(` text-black`)} value="light-green">light-green</Option>
          <Option className={`bg-green-`.concat(intensity).concat(` text-black`)} value="green">green</Option>
          <Option className={`bg-teal-`.concat(intensity).concat(` text-black`)} value="teal">teal</Option>
          <Option className={`bg-cyan-`.concat(intensity).concat(` text-black`)} value="cyan">cyan</Option>
          <Option className={`bg-light-blue-`.concat(intensity).concat(` text-black`)} value="light-blue">light-blue</Option>
          <Option className={`bg-blue-`.concat(intensity).concat(` text-black`)} value="blue">blue</Option>
          <Option className={`bg-indigo-`.concat(intensity).concat(` text-black`)} value="indigo">indigo</Option>
          <Option className={`bg-deep-purple-`.concat(intensity).concat(` text-black`)} value="deep">deep-purple</Option>
          <Option className={`bg-purple-`.concat(intensity).concat(` text-black`)} value="purple">purple</Option>
          <Option className={`bg-pink-`.concat(intensity).concat(` text-black`)} value="pink">pink</Option>
          <Option className={`bg-red-`.concat(intensity).concat(` text-black`)} value="red">red</Option>
        </Select>
        <Select label="select intensity" onChange={(r) => setIntensity(r)}>
          <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-100`)} value="100">100</Option>
          <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-200`)} value="200">200</Option>
          <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-300`)} value="300">300</Option>
          <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-400`)} value="400">400</Option>
          <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-500`)} value="500">500</Option>
          <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-600`)} value="600">600</Option>
          <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-700`)} value="700">700</Option>
          <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-800`)} value="800">800</Option>
          <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-900`)} value="900">900</Option>
        </Select>
      </div>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-extrabold text-2xl text-white"
        >
          BUSKINGKHAI
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