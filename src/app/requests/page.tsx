"use client";

import Navbar from "@/components/Navbar";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import addSongRequest from "../firebase/addSongRequest";
import checkUniqueTitle from "../firebase/checkUniqueTitle";
import RequestWriteup from "../writeups/RequestWriteup";

export default function Requests() {
    const [title, setTitle] = useState<string>("");
    const [artist, setArtist] = useState<string>("");
    const [notes, setNotes] = useState<string>("");

    const [reqStatus, setReqStatus] = useState<string>("");
    const [color, setColor] = useState<string>("text-green-300");

    return (
        <div>
            <Navbar></Navbar>
            <div
                className="container flex flex-col h-5/6 justify-evenly items-center"
            >
                <Typography className="flex justify-center text-2xl mt-8 font-mono ">Song Requests</Typography>
                <div
                    className="m-4 flex flex-col gap-2 outline outline-1 outline-blue-gray-900 p-4 rounded-xl">
                    <Typography>
                        Have a song request? Let me know here!
                    </Typography>
                    <Input color="gray" label="Song Title" onChange={e => {
                        setTitle(e.currentTarget.value);
                    }} />

                    <Typography>Optional fields:</Typography>
                    <Input label="Artist (Optional)" onChange={e => {
                        setArtist(e.currentTarget.value);
                    }} />
                    <Input label="Additional Notes/ Requests (Optional)" onChange={e => {
                        setNotes(e.currentTarget.value);
                    }} />
                    <Button color="blue-gray" className="my-4" onClick={() => {
                        if (title == "") {
                            setColor("text-red-300");
                            setReqStatus("Please enter a song title!");
                        } else {
                            checkUniqueTitle(title.toLowerCase().trim()).then(b => {
                                if (b) {
                                    addSongRequest(
                                        title.toLowerCase().trim(),
                                        artist.toLowerCase().trim(),
                                        notes.toLowerCase().trim()
                                    ).then(r => {
                                        setColor("text-green-300");
                                        setReqStatus("Song added!");
                                    }); // 1 success, 0 error- no song title, -1 repeated entry
                                } else {
                                    setColor("text-red-300");
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