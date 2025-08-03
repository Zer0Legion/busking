import ContentSection from "@/components/content/ContentSection";
import Link from "next/link";
import { UI_CONSTANTS } from "@/constants";

export default function AboutMeWriteup() {
    return (
        <div className="flex flex-col gap-4">
            <ContentSection
                content={
                    <div className="text-center space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-mono font-semibold">Hello! I am Khai.</h2>
                            <h3 className="text-xl font-mono">Welcome to my busking page!</h3>
                        </div>

                        <div className="text-sm leading-relaxed">
                            I am a Computer Science university student with a huge passion for singing and playing the guitar.
                            I took the time to create this webpage for a fun project that combines both of what I love to do.
                        </div>

                        <div className="space-y-2">
                            <h4 className="font-semibold font-mono">Genres</h4>
                            <p className="text-sm">
                                I love pop and oldies, so feel free to{" "}
                                <Link href="/requests" className={`${UI_CONSTANTS.components.link} ${UI_CONSTANTS.colors.link}`}>
                                    request some of your favourites!
                                </Link>
                            </p>
                        </div>
                    </div>
                }
            />
        </div>
    );
}