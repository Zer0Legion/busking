"use client";

import { Typography } from "@material-tailwind/react";
import AboutMeWriteup from "../writeups/AboutMeWriteup";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import fhd_busking from "../../../assets/fhd_busking.jpg"

export default function AboutMe() {
    return (
    <div className="flex flex-container flex-col items-center justify-center">
        <Navbar></Navbar>
        <div
        className="flex container flex-col items-center"
      >
        <div className="  bg-brown-500 w-screen flex z-0 relative container justify-center rounded-b-xl pt-24 pb-24">
          <Typography className="font-mono text-4xl relative bottom-12 text-brown-200" >ABOUT ME</Typography>
        </div>
        <Image className=" inline w-52 z-30 relative bottom-24 rounded-xl outline outline-1 outline-brown-700" src={fhd_busking.src} alt={"about_me"} width="1000" height="1000" ></Image>
      </div>
        <AboutMeWriteup></AboutMeWriteup>
    </div>
    )
}