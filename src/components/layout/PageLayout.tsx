import { ReactNode } from "react";
import Navigation from "@/components/Navbar";
import { PageConfig } from "@/types";

interface PageLayoutProps {
  children: ReactNode;
  config?: PageConfig;
  className?: string;
}

export default function PageLayout({ 
  children, 
  config,
  className = "flex flex-container flex-col items-center justify-center" 
}: PageLayoutProps) {
  return (
    <div className={className}>
      <Navigation />
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}
