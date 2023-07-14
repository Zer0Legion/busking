"use client";
 
import Navbar from "@/components/Navbar";
import { Button } from "@material-tailwind/react";
import HomeWriteup from "./writeups/HomeWriteup";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HomeWriteup/>
    </div>
  )
}
