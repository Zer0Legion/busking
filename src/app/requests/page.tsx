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
                <Typography className="flex justify-center text-2xl mt-8 font-mono text-brown-900 ">Song Requests</Typography>
                <div
                    className="m-4 flex flex-col gap-2 outline outline-1 outline-brown-300 p-4 rounded-xl">
                    <Typography>
                        Have a song request? Let me know here!
                    </Typography>
                    <Input color="brown" label="Song Title" className="placeholder-brown-500" onChange={e => {
                        setTitle(e.currentTarget.value);
                    }} />

                    <Typography>Optional fields:</Typography>
                    <Input color="brown" className="text-brown-500" label="Artist (Optional)" onChange={e => {
                        setArtist(e.currentTarget.value);
                    }} />
                    <Input color="brown" label="Additional Notes/ Requests (Optional)" onChange={e => {
                        setNotes(e.currentTarget.value);
                    }} />
                    <Button color="brown" className="my-4" onClick={() => {
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