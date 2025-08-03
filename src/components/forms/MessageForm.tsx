import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useMessage } from "@/hooks/useMessage";
import { Message } from "@/types";
import { UI_CONSTANTS } from "@/constants";
import StatusMessage from "@/components/ui/StatusMessage";

interface MessageFormProps {
  onSuccess?: () => void;
  className?: string;
}

export default function MessageForm({ onSuccess, className = "" }: MessageFormProps) {
  const [formData, setFormData] = useState<Omit<Message, 'id' | 'created'>>({
    from: "",
    message: ""
  });

  const { messageState, isLoading, submitMessage } = useMessage();

  const handleSubmit = async () => {
    await submitMessage(formData);
    if (messageState.status === 'success') {
      setFormData({ from: "", message: "" });
      onSuccess?.();
    }
  };

  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <Input 
        color="brown" 
        label="Your Name" 
        size="md" 
        value={formData.from}
        onChange={handleInputChange('from')}
      />
      
      <Input 
        color="brown" 
        label="Your Message here..." 
        size="lg" 
        value={formData.message}
        onChange={handleInputChange('message')}
      />
      
      <Button 
        className={UI_CONSTANTS.colors.secondary}
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>
      
      <StatusMessage state={messageState} />
    </div>
  );
}
