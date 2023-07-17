"use client";

import Navbar from "@/components/Navbar";
import { Button, Typography } from "@material-tailwind/react";
import LinksWriteup from "../writeups/LinksWriteup";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Links() {
    return (
        <div>
            <Navbar></Navbar>
            <div
                className="container flex flex-col items-center gap-2 p-2 justify-center mt-8"
            >
                <Typography className="flex justify-center text-2xl my-4 font-mono ">My Links</Typography>
                <a href="https://instagram.com/buskingkhai?igshid=MzNlNGNkZWQ4Mg=="><Button className="w-80" color="brown" size="lg"><InstagramIcon /> Instagram: @buskingkhai </Button></a>
                {/* <a href="https://instagram.com/buskingkhai?igshid=MzNlNGNkZWQ4Mg=="><Button color="blue-gray" size="lg">Tiktok: @buskingkhai</Button></a> */}
                <a href="https://www.linkedin.com/in/anglengkhai"><Button className="w-80" color="brown" size="lg"><LinkedInIcon /> LinkedIn</Button></a>
                <a href="/../tip"><Button className="w-80" color="brown" size="lg"><AttachMoneyIcon /> Tip Me</Button></a>
                <Typography className="m-4 p-4"><LinksWriteup/></Typography>
            </div>
        </div>
    )
}