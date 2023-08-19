"use client";

import Navbar from "@/components/Navbar";
import { Button, Card, CardBody, Collapse, Input, Typography } from "@material-tailwind/react";
import TipWriteup from "../writeups/TipWriteup";
import { saveAs } from "file-saver";
import SGQR from "../../../assets/my_paynowQR.jpg"
import { useState } from "react";
import Image from "next/image";
import MessageWriteup from "../writeups/MessageWriteup";
import addMessage from "../firebase/addMessage";

export default function TipMe() {
    const FileSaver = require('file-saver');

    const [clicked, setClicked] = useState("outline outline-2 rounded-md p-6 outline-light-blue-300");
    const [message, setMessage] = useState<string>("");
    const [messageFrom, setMessageFrom] = useState<string>("");

    const [open, setOpen] = useState(false);
    const toggleOpen = () => {setOpen(!open); console.log(open)}
    return (
        <div className="flex flex-container flex-col items-center justify-center">
            <Navbar></Navbar>
            <div
                className="flex flex-col items-center gap-3 p-6"
            >
                <Typography className="flex justify-center text-4xl font-semibold mt-4 font-mono ">Tip Me</Typography>
                <Typography><TipWriteup /></Typography>
                <div
                    onClick={() => {
                        FileSaver.saveAs(SGQR.src, "buskingkhai_sgqr.jpg");
                        setClicked("outline outline-2 rounded-md p-6 outline-light-blue-200");
                        setTimeout(() => setClicked("outline outline-2 rounded-md p-6 outline-light-blue-300"), 250)
                    }}
                    className={clicked}
                >
                    <Typography className="">Click to download my SGQR:</Typography>
                    <Image className="mt-2" src={SGQR.src} alt="my-sgqr" width="1000" height="1000" ></Image>
                </div>
               
                <Typography className="flex justify-center text-4xl font-semibold mt-4 font-mono ">Leave a Message!</Typography>
                <Typography><MessageWriteup/></Typography>

                <Input color="brown" label="Your Name" size="md" onChange={(e) => {setMessageFrom(e.currentTarget.value)}}></Input>
                <Input color="brown" label="Your Message here..." size="lg" onChange={(e) => {setMessage(e.currentTarget.value)}}></Input>
                <a href="./"><Button className="bg-light-blue-300" onClick={(e) => {
                    console.log(messageFrom, message);
                    if (message.length > 4) {
                        addMessage(messageFrom, message);
                    }
                }}>Send Message</Button></a>
            </div>

        </div>
    )
}