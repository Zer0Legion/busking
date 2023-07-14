"use client";

import Navbar from "@/components/Navbar";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";

export default function Requests() {
    const [title, setTitle] = useState<string>("");
    const [artist, setArtist] = useState<string>("");
    const [notes, setNotes] = useState<string>("");

    return (
        <div>
            <Navbar></Navbar>
            <Typography>requests</Typography>
            <div
            className="m-4 flex flex-col gap-2">
            <Typography>
                Have a song request? Let me know here! 
            </Typography>
            <Input color="gray" label="Song Title" onChange={e => {
                setTitle(e.currentTarget.value);
            }}/>
            
            <Typography>Optional fields:</Typography>
            <Input label="Artist (Optional)" onChange={e => {
                setArtist(e.currentTarget.value);
            }}/>
            <Input label="Additional Notes/ Requests (Optional)" onChange={e => {
                setNotes(e.currentTarget.value);
            }}/>
            <Button color="blue-gray" className="my-4" onClick={() => {
                console.log("title", title, "artist", artist, "notes", notes);
            }}>submit</Button>
            </div>

        </div>
    )
}