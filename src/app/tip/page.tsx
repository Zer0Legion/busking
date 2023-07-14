"use client";

import Navbar from "@/components/Navbar";
import { Typography } from "@material-tailwind/react";
import TipWriteup from "../writeups/TipWriteup";
import { saveAs } from "file-saver";
import SGQR from "../../../assets/my_paynowQR.jpg"
import { useState } from "react";

export default function Requests() {
    const FileSaver = require('file-saver');

    const [clicked, setClicked] = useState("outline outline-2 rounded-md p-6 outline-blue-gray-500");
    return (
        <div>
            <Navbar></Navbar>
            <div
                className="flex flex-col items-center gap-3 p-6"
            >
                <Typography className="flex justify-center text-2xl mt-4 font-mono ">Tip</Typography>
                <Typography><TipWriteup /></Typography>
                <div
                    onClick={() => {
                        FileSaver.saveAs(SGQR.src, "buskingkhai_sgqr.jpg");
                        setClicked("outline outline-2 rounded-md p-6 outline-blue-gray-100");
                        setTimeout(() => setClicked("outline outline-2 rounded-md p-6 outline-blue-gray-500"), 250)
                    }}
                    className={clicked}
                >
                    <Typography className="">Download my SGQR:</Typography>
                    <img className="mt-2" src={SGQR.src}></img>
                </div>
            </div>
        
        </div>
    )
}