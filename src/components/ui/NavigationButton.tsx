import { Button } from "@material-tailwind/react";
import { NavigationItem } from "@/types";
import { UI_CONSTANTS } from "@/constants";
import Link from "next/link";

interface NavigationButtonProps {
  item: NavigationItem;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function NavigationButton({ 
  item, 
  className = "", 
  size = "lg" 
}: NavigationButtonProps) {
  const IconComponent = item.icon;

  return (
    <Link href={item.href} className={`${UI_CONSTANTS.spacing.buttonSpacing} ${className}`}>
      <Button size={size} className={`${UI_CONSTANTS.colors.primary} w-56 flex items-center justify-center`}>
        {IconComponent && <IconComponent className="mr-1" />}
        <span>{item.label}</span>
      </Button>
    </Link>
  );
}
