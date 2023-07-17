import { Typography } from "@material-tailwind/react";

export default function HomeWriteup() {
    return <div
        className="my-2 p-4 container flex flex-col justify-center max-w-screen items-center relative bottom-24"
    >
        <Typography className="flex justify-center text-2xl mt-8 font-mono ">Hello! I am Khai.</Typography>
        <Typography className="flex justify-center text-xl mb-4 font-mono">Welcome to my busking page!</Typography>

        <Typography>
            I am a Computer Science university student with a huge passion for singing and playing the guitar.
            I took the time to create this webpage for a fun project that combines both of what I love to do.
        </Typography>
        <Typography className="font-semibold font-mono m-2">Genres</Typography>
        <Typography>
            I love pop and oldies, so feel free to <a href="./requests" className="underline text-orange-900">request some of your favourites!</a>
        </Typography>
    </div>
}