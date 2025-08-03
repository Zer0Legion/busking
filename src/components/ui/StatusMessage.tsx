import { Typography } from "@material-tailwind/react";
import { RequestState } from "@/types";
import { UI_CONSTANTS } from "@/constants";

interface StatusMessageProps {
  state: RequestState;
  className?: string;
}

export default function StatusMessage({ state, className = "" }: StatusMessageProps) {
  if (!state.message) return null;

  const getColorClass = () => {
    switch (state.status) {
      case 'success':
        return UI_CONSTANTS.colors.success;
      case 'error':
        return UI_CONSTANTS.colors.error;
      case 'warning':
        return UI_CONSTANTS.colors.warning;
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <Typography className={getColorClass()}>
        {state.message}
      </Typography>
    </div>
  );
}
