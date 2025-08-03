"use client";

import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { saveAs } from "file-saver";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import CardContainer from "@/components/ui/CardContainer";
import MessageForm from "@/components/forms/MessageForm";
import TipWriteup from "../writeups/TipWriteup";
import MessageWriteup from "../writeups/MessageWriteup";
import SGQR from "../../../assets/my_paynowQR.jpg";

export default function TipMe() {
    const [clicked, setClicked] = useState("outline outline-2 rounded-md p-6 outline-light-blue-300");

    const handleQRDownload = () => {
        saveAs(SGQR.src, "buskingkhai_sgqr.jpg");
        setClicked("outline outline-2 rounded-md p-6 outline-light-blue-200");
        setTimeout(() => setClicked("outline outline-2 rounded-md p-6 outline-light-blue-300"), 250);
    };

    return (
        <PageLayout>
            <div className="flex flex-col items-center gap-3 p-6">
                <PageHeader title="Tip Me" />
                
                <Typography>
                    <TipWriteup />
                </Typography>
                
                <CardContainer 
                    variant="compact"
                    className={clicked}
                    onClick={handleQRDownload}
                >
                    <Typography className="">Click to download my SGQR:</Typography>
                    <Image 
                        className="mt-2" 
                        src={SGQR.src} 
                        alt="my-sgqr" 
                        width="1000" 
                        height="1000" 
                    />
                </CardContainer>
               
                <PageHeader title="Leave a Message!" />
                
                <Typography>
                    <MessageWriteup />
                </Typography>

                <MessageForm />
            </div>
        </PageLayout>
    );
}