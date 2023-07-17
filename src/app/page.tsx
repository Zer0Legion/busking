"use client";
 
import Navbar from "@/components/Navbar";
import { Button } from "@material-tailwind/react";
import HomeWriteup from "./writeups/HomeWriteup";
import bg from "../../assets/guitar-bg.jpg";
import aboutMe from "../../assets/aboutme.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Image className="w-52" src={aboutMe.src} alt={"about_me"} width="54" height="54" ></Image>
      <HomeWriteup/>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </div>
  )
}
