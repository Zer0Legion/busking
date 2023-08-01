"use client";

import Navbar from "@/components/Navbar";
import { Button, Typography } from "@material-tailwind/react";
import bg from "../../assets/guitar-bg.jpg";
import aboutMe from "../../assets/aboutme.jpg";
import Image from "next/image";
import InstagramIcon from '@mui/icons-material/Instagram';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export default function Home() {
  return (
    <div className="flex flex-container flex-col items-center justify-center">
      <Navbar></Navbar>
      <div
        className="flex container flex-col items-center"
      >
        {/* bg-orange-200 */}
        <div className="  bg-brown-500 w-screen flex z-0 relative container justify-center rounded-b-xl pt-24 pb-24">
          <Typography className="font-mono text-4xl relative bottom-12 text-brown-200" >BUSKINGKHAI</Typography>
        </div>
        <Image className=" inline w-52 z-30 relative bottom-24 rounded-xl outline outline-1 outline-brown-700" src={aboutMe.src} alt={"about_me"} width="1000" height="1000" ></Image>
      </div>
      <div className="flex flex-col items-center relative bottom-12">
        <a href="/aboutme" className="mb-2"><Button size="lg" className="bg-brown-500 w-52"><PersonIcon className="mr-1" /> About Me</Button></a>
        <a href="/requests" className="mb-2"><Button size="lg" className="bg-brown-500 w-52"><QuestionMarkIcon className="mr-1" /> Song Requests</Button></a>
        <a href="/links" className="mb-2"><Button size="lg" className="bg-brown-500 w-52"><InstagramIcon className="mr-1"/> My Links</Button></a>
        <a href="/tip" className="mb-2"><Button size="lg" className="bg-brown-500 w-52 flex container items-center "><AttachMoneyIcon className="mr-1"/><div> Tip Me /<br/> Send a message!</div></Button></a>
      </div>
    </div>
  )
}
