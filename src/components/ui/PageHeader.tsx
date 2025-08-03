import { Typography } from "@material-tailwind/react";
import { UI_CONSTANTS } from "@/constants";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHeader({ title, subtitle, className = "" }: PageHeaderProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <Typography className={`${UI_CONSTANTS.typography.heroTitle} ${UI_CONSTANTS.colors.accent} mt-8 mb-8`}>
        {title}
      </Typography>
      {subtitle && (
        <Typography className="text-lg text-gray-600 mb-4">
          {subtitle}
        </Typography>
      )}
    </div>
  );
}
