"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import PageLayout from "@/components/layout/PageLayout";
import NavigationButton from "@/components/ui/NavigationButton";
import { NAVIGATION_ITEMS, UI_CONSTANTS, SITE_CONFIG } from "@/constants";
import aboutMe from "../../assets/aboutme.jpg";

export default function Home() {
  return (
    <PageLayout>
      <div className="flex container flex-col items-center">
        {/* Hero Section */}
        <div className="w-screen flex z-0 relative container justify-center rounded-b-xl pt-24 pb-24">
          <Typography className={`${UI_CONSTANTS.typography.brandTitle} relative bottom-12`}>
            {SITE_CONFIG.name}
          </Typography>
        </div>
        
        {/* Profile Image */}
        <Image 
          className="inline w-44 z-30 relative bottom-24 rounded-xl outline outline-1 outline-brown-700" 
          src={aboutMe.src} 
          alt="About me" 
          width="1000" 
          height="1000" 
        />
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex flex-col items-center relative bottom-12">
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationButton key={item.href} item={item} />
        ))}
      </div>
    </PageLayout>
  );
}
