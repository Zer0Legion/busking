"use client";

import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import AboutMeWriteup from "../writeups/AboutMeWriteup";
import Image from "next/image";
import fhd_busking from "../../../assets/fhd_busking.jpg";

export default function AboutMe() {
    return (
        <PageLayout>
            <div className="flex flex-col items-center">
                <div className="w-screen flex z-0 relative container justify-center rounded-b-xl pt-24 pb-24">
                    <PageHeader title="ABOUT ME" />
                </div>
                
                <Image 
                    className="inline w-52 z-30 relative bottom-24 rounded-xl outline outline-1" 
                    src={fhd_busking.src} 
                    alt="About me - busking photo" 
                    width="1000" 
                    height="1000" 
                />
                
                <div className="relative bottom-12 max-w-4xl mx-auto px-6">
                    <AboutMeWriteup />
                </div>
            </div>
        </PageLayout>
    );
}