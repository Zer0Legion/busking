import { Button, Option, Select } from "@material-tailwind/react";
import Image from "next/image"
import { useState, useEffect } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import aboutMe from "../../assets/aboutme.jpg";

export default function HomePage() {

    const [colour, setColour] = useState<any>("brown");
    const [intensity, setIntensity] = useState<any>("100");

    useEffect(() => {

    }, [colour, intensity])

    return (
        <div className={" bg-".concat(colour).concat("-").concat(intensity).concat(" flex container flex-col w-full items-center h-screen relative bottom-24")}>
            <div className="colour-selector relative w-40">

                <span className="bg-blue-gray-100">.</span><span className="bg-blue-gray-200">.</span><span className="bg-blue-gray-300">.</span><span className="bg-blue-gray-400">.</span><span className="bg-blue-gray-500">.</span><span className="bg-blue-gray-600">.</span><span className="bg-blue-gray-700">.</span><span className="bg-blue-gray-800">.</span><span className="bg-blue-gray-900">.</span><span className="bg-gray-100">.</span><span className="bg-gray-200">.</span><span className="bg-gray-300">.</span><span className="bg-gray-400">.</span><span className="bg-gray-500">.</span><span className="bg-gray-600">.</span><span className="bg-gray-700">.</span><span className="bg-gray-800">.</span><span className="bg-gray-900">.</span><span className="bg-brown-100">.</span><span className="bg-brown-200">.</span><span className="bg-brown-300">.</span><span className="bg-brown-400">.</span><span className="bg-brown-500">.</span><span className="bg-brown-600">.</span><span className="bg-brown-700">.</span><span className="bg-brown-800">.</span><span className="bg-brown-900">.</span><span className="bg-deep-orange-100">.</span><span className="bg-deep-orange-200">.</span><span className="bg-deep-orange-300">.</span><span className="bg-deep-orange-400">.</span><span className="bg-deep-orange-500">.</span><span className="bg-deep-orange-600">.</span><span className="bg-deep-orange-700">.</span><span className="bg-deep-orange-800">.</span><span className="bg-deep-orange-900">.</span><span className="bg-orange-100">.</span><span className="bg-orange-200">.</span><span className="bg-orange-300">.</span><span className="bg-orange-400">.</span><span className="bg-orange-500">.</span><span className="bg-orange-600">.</span><span className="bg-orange-700">.</span><span className="bg-orange-800">.</span><span className="bg-orange-900">.</span><span className="bg-red-100">.</span><span className="bg-red-200">.</span><span className="bg-red-300">.</span><span className="bg-red-400">.</span><span className="bg-red-500">.</span><span className="bg-red-600">.</span><span className="bg-red-700">.</span><span className="bg-red-800">.</span><span className="bg-red-900">.</span><span className="bg-pink-100">.</span><span className="bg-pink-200">.</span><span className="bg-pink-300">.</span><span className="bg-pink-400">.</span><span className="bg-pink-500">.</span><span className="bg-pink-600">.</span><span className="bg-pink-700">.</span><span className="bg-pink-800">.</span><span className="bg-pink-900">.</span><span className="bg-deep-purple-100">.</span><span className="bg-deep-purple-200">.</span><span className="bg-deep-purple-300">.</span><span className="bg-deep-purple-400">.</span><span className="bg-deep-purple-500">.</span><span className="bg-deep-purple-600">.</span><span className="bg-deep-purple-700">.</span><span className="bg-deep-purple-800">.</span><span className="bg-deep-purple-900">.</span><span className="bg-purple-100">.</span><span className="bg-purple-200">.</span><span className="bg-purple-300">.</span><span className="bg-purple-400">.</span><span className="bg-purple-500">.</span><span className="bg-purple-600">.</span><span className="bg-purple-700">.</span><span className="bg-purple-800">.</span><span className="bg-purple-900">.</span><span className="bg-indigo-100">.</span><span className="bg-indigo-200">.</span><span className="bg-indigo-300">.</span><span className="bg-light-blue-100">.</span><span className="bg-light-blue-200">.</span><span className="bg-light-blue-300">.</span><span className="bg-light-blue-400">.</span><span className="bg-light-blue-500">.</span><span className="bg-light-blue-600">.</span><span className="bg-light-blue-700">.</span><span className="bg-light-blue-800">.</span><span className="bg-light-blue-900">.</span><span className="bg-indigo-400">.</span><span className="bg-indigo-500">.</span><span className="bg-indigo-600">.</span><span className="bg-indigo-700">.</span><span className="bg-indigo-800">.</span><span className="bg-indigo-900">.</span><span className="bg-blue-100">.</span><span className="bg-blue-200">.</span><span className="bg-blue-300">.</span><span className="bg-blue-400">.</span><span className="bg-blue-500">.</span><span className="bg-blue-600">.</span><span className="bg-blue-700">.</span><span className="bg-blue-800">.</span><span className="bg-blue-900">.</span><span className="bg-cyan-100">.</span><span className="bg-cyan-200">.</span><span className="bg-cyan-300">.</span><span className="bg-cyan-400">.</span><span className="bg-cyan-500">.</span><span className="bg-cyan-600">.</span><span className="bg-cyan-700">.</span><span className="bg-cyan-800">.</span><span className="bg-cyan-900">.</span><span className="bg-teal-100">.</span><span className="bg-teal-200">.</span><span className="bg-teal-300">.</span><span className="bg-teal-400">.</span><span className="bg-teal-500">.</span><span className="bg-teal-600">.</span><span className="bg-teal-700">.</span><span className="bg-teal-800">.</span><span className="bg-teal-900">.</span><span className="bg-light-green-100">.</span><span className="bg-light-green-200">.</span><span className="bg-light-green-300">.</span><span className="bg-light-green-400">.</span><span className="bg-light-green-500">.</span><span className="bg-light-green-600">.</span><span className="bg-light-green-700">.</span><span className="bg-light-green-800">.</span><span className="bg-light-green-900">.</span><span className="bg-green-100">.</span><span className="bg-green-200">.</span><span className="bg-green-300">.</span><span className="bg-green-400">.</span><span className="bg-green-500">.</span><span className="bg-green-600">.</span><span className="bg-green-700">.</span><span className="bg-green-800">.</span><span className="bg-green-900">.</span><span className="bg-lime-100">.</span><span className="bg-lime-200">.</span><span className="bg-lime-300">.</span><span className="bg-lime-400">.</span><span className="bg-lime-500">.</span><span className="bg-lime-600">.</span><span className="bg-lime-700">.</span><span className="bg-lime-800">.</span><span className="bg-lime-900">.</span><span className="bg-yellow-100">.</span><span className="bg-yellow-200">.</span><span className="bg-yellow-300">.</span><span className="bg-yellow-400">.</span><span className="bg-yellow-500">.</span><span className="bg-yellow-600">.</span><span className="bg-yellow-700">.</span><span className="bg-yellow-800">.</span><span className="bg-yellow-900">.</span><span className="bg-amber-100">.</span><span className="bg-amber-200">.</span><span className="bg-amber-300">.</span><span className="bg-amber-400">.</span><span className="bg-amber-500">.</span><span className="bg-amber-600">.</span><span className="bg-amber-700">.</span><span className="bg-amber-800">.</span><span className="bg-amber-900">.</span>

                <Select label="select colour" className="z-0" onChange={(r) => { setColour(r) }}>
                    <Option className={`bg-blue-gray-`.concat(intensity).concat(` text-black`)} value="blue-gray">blue-gray</Option>
                    <Option className={`bg-gray-`.concat(intensity).concat(` text-black`)} value="gray">gray</Option>
                    <Option className={`bg-brown-`.concat(intensity).concat(` text-black`)} value="brown">brown</Option>
                    <Option className={`bg-deep-orange-`.concat(intensity).concat(` text-black`)} value="deep">deep-orange</Option>
                    <Option className={`bg-orange-`.concat(intensity).concat(` text-black`)} value="orange">orange</Option>
                    <Option className={`bg-amber-`.concat(intensity).concat(` text-black`)} value="amber">amber</Option>
                    <Option className={`bg-yellow-`.concat(intensity).concat(` text-black`)} value="yellow">yellow</Option>
                    <Option className={`bg-lime-`.concat(intensity).concat(` text-black`)} value="lime">lime</Option>
                    <Option className={`bg-light-green-`.concat(intensity).concat(` text-black`)} value="light-green">light-green</Option>
                    <Option className={`bg-green-`.concat(intensity).concat(` text-black`)} value="green">green</Option>
                    <Option className={`bg-teal-`.concat(intensity).concat(` text-black`)} value="teal">teal</Option>
                    <Option className={`bg-cyan-`.concat(intensity).concat(` text-black`)} value="cyan">cyan</Option>
                    <Option className={`bg-light-blue-`.concat(intensity).concat(` text-black`)} value="light-blue">light-blue</Option>
                    <Option className={`bg-blue-`.concat(intensity).concat(` text-black`)} value="blue">blue</Option>
                    <Option className={`bg-indigo-`.concat(intensity).concat(` text-black`)} value="indigo">indigo</Option>
                    <Option className={`bg-deep-purple-`.concat(intensity).concat(` text-black`)} value="deep">deep-purple</Option>
                    <Option className={`bg-purple-`.concat(intensity).concat(` text-black`)} value="purple">purple</Option>
                    <Option className={`bg-pink-`.concat(intensity).concat(` text-black`)} value="pink">pink</Option>
                    <Option className={`bg-red-`.concat(intensity).concat(` text-black`)} value="red">red</Option>
                </Select>
                <Select label="select intensity" onChange={(r) => setIntensity(r)}>
                    <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-100`)} value="100">100</Option>
                    <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-200`)} value="200">200</Option>
                    <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-300`)} value="300">300</Option>
                    <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-400`)} value="400">400</Option>
                    <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-500`)} value="500">500</Option>
                    <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-600`)} value="600">600</Option>
                    <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-700`)} value="700">700</Option>
                    <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-800`)} value="800">800</Option>
                    <Option onClick={() => { }} className={`bg-`.concat(colour).concat(`-900`)} value="900">900</Option>
                </Select>
            </div>
            <div>
                <Image className=" inline w-52 z-30 relative rounded-xl outline outline-1 outline-brown-700" src={aboutMe.src} alt={"about_me"} width="1000" height="1000" ></Image>
            </div>
            <div className="flex flex-col items-center relative top-12">
                <a href="/aboutme" className="mb-2"><Button size="lg" className="bg-brown-500 w-52"><PersonIcon /> About Me</Button></a>
                <a href="/requests" className="mb-2"><Button size="lg" className="bg-brown-500 w-52"><QuestionMarkIcon /> Song Requests</Button></a>
                <a href="/links" className="mb-2"><Button size="lg" className="bg-brown-500 w-52"><InstagramIcon /> My Links</Button></a>
                <a href="tipme" className="mb-2"><Button size="lg" className="bg-brown-500 w-52"><AttachMoneyIcon /> Tip Me</Button></a>
            </div>
        </div>
    )
}