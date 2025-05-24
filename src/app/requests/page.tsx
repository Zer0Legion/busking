"use client";

import Navbar from "@/components/Navbar";
import { Button, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import addSongRequest from "../firebase/addSongRequest";
import checkUniqueTitle from "../firebase/checkUniqueSong";
import RequestWriteup from "../writeups/RequestWriteup";


export default function Requests() {
    const [title, setTitle] = useState<string>("");
    const [artist, setArtist] = useState<string>("");
    const [notes, setNotes] = useState<string>("");

    const [reqStatus, setReqStatus] = useState<string>("");
    const [color, setColor] = useState<string>("text-green-700");


    return (
        <div className="flex flex-container flex-col items-center justify-center">
            <Navbar></Navbar>
            <div
                className="container flex flex-col h-5/6 justify-evenly items-center"
            >
                <Typography className="flex justify-center text-6xl font-semibold mt-8 mb-8 font-mono text-brown-900 ">Song Requests</Typography>
                <div
                    className="m-4 p-8 flex flex-col gap-2 outline outline-2 outline-light-blue-600 rounded-xl">
                    <Typography className="text-black">
                        Have a song request? Let me know here!
                    </Typography>
                    <Input color="light-blue" label="Song Title" className="placeholder-light-blue-400" onChange={e => {
                        setTitle(e.currentTarget.value);
                    }} />

                    <Typography className="text-black">Optional fields:</Typography>
                    <Input color="light-blue" label="Artist (Optional)" onChange={e => {
                        setArtist(e.currentTarget.value);
                    }} />
                    <Input color="light-blue" label="Additional Notes/ Requests (Optional)" onChange={e => {
                        setNotes(e.currentTarget.value);
                    }} />
                    <Button className="my-4 bg-light-blue-300" onClick={() => {
                        if (title == "") {
                            setColor("text-red-900");
                            setReqStatus("Please enter a song title!");
                        } else {
                            checkUniqueTitle(title.toLowerCase().trim(), artist.toLowerCase().trim()).then(b => {
                                if (b) {
                                    addSongRequest(
                                        title.toLowerCase().trim(),
                                        artist.toLowerCase().trim(),
                                        notes.toLowerCase().trim()
                                    ).then(r => {
                                        setColor("text-green-700");
                                        setReqStatus("Song added!");
                                    }); // 1 success, 0 error- no song title, -1 repeated entry
                                } else {
                                    setColor("text-yellow-200");
                                    setReqStatus("Hold on, this song is about to be played!");
                                }
                            })
                        }

                    }}>submit</Button>
                    <div className="flex justify-center">
                        <Typography className={color} >{reqStatus}</Typography>
                    </div>
                </div>
                <div
                    className="m-4 flex flex-col gap-2 p-4"
                >
                    <Typography><RequestWriteup /></Typography>
                </div>
            </div>
        </div>
    )
}