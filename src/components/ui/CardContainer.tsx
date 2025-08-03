import { ReactNode } from "react";
import { UI_CONSTANTS } from "@/constants";

interface CardContainerProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'compact';
  onClick?: () => void;
}

export default function CardContainer({ 
  children, 
  className = "", 
  variant = 'default',
  onClick
}: CardContainerProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return "outline outline-2 outline-light-blue-600 rounded-xl";
      case 'compact':
        return "outline outline-2 rounded-md outline-light-blue-300";
      default:
        return "shadow-lg rounded-xl border border-gray-200";
    }
  };

  const containerClasses = `${UI_CONSTANTS.spacing.containerPadding} m-4 flex flex-col ${UI_CONSTANTS.spacing.sectionGap} ${getVariantClasses()} ${onClick ? 'cursor-pointer' : ''} ${className}`;

  return (
    <div className={containerClasses} onClick={onClick}>
      {children}
    </div>
  );
}
