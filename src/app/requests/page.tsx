"use client";

import { Typography } from "@material-tailwind/react";
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import SongRequestForm from "@/components/forms/SongRequestForm";
import RequestWriteup from "../writeups/RequestWriteup";

export default function Requests() {
    return (
        <PageLayout>
            <div className="container flex flex-col h-5/6 justify-evenly items-center">
                <PageHeader title="Song Requests" />
                
                <SongRequestForm />
                
                <div className="m-4 flex flex-col gap-2 p-4">
                    <Typography>
                        <RequestWriteup />
                    </Typography>
                </div>
            </div>
        </PageLayout>
    );
}