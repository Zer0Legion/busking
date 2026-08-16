import ContentSection from "@/components/content/ContentSection";
import Link from "next/link";
import { UI_CONSTANTS } from "@/constants";

export default function AboutMeWriteup() {
    return (
        <div className="flex flex-col gap-4">
            <ContentSection
                content={
                    <div className="space-y-6">
                        <div className="space-y-4 text-center">
                            <h2 className="text-2xl font-mono font-semibold">Hello! I am Khai.</h2>
                            <h3 className="text-xl font-mono">Welcome to my busking page!</h3>
                        </div>

                        <div className="text-sm leading-relaxed">
                            I am a part-time busker with a huge passion for spreading happiness through music, doing this whenever I have the time.
                            <br /><br />
                            I made this webpage for a fun project that integrates my interest in web development.
                        </div>

                        <div className="space-y-2 text-center">
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