import { useState } from "react";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useSongRequest } from "@/hooks/useSongRequest";
import { SongRequest } from "@/types";
import { UI_CONSTANTS } from "@/constants";
import CardContainer from "@/components/ui/CardContainer";
import StatusMessage from "@/components/ui/StatusMessage";

interface SongRequestFormProps {
  onSuccess?: () => void;
  className?: string;
}

export default function SongRequestForm({ onSuccess, className = "" }: SongRequestFormProps) {
  const [formData, setFormData] = useState<Omit<SongRequest, 'id' | 'created'>>({
    name: "",
    artist: "",
    remarks: ""
  });

  const { requestState, isLoading, submitSongRequest } = useSongRequest();

  const handleSubmit = async () => {
    await submitSongRequest(formData);
    if (requestState.status === 'success') {
      setFormData({ name: "", artist: "", remarks: "" });
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
    <CardContainer variant="outlined" className={className}>
      <Typography className="text-black">
        Have a song request? Let me know here!
      </Typography>
      
      <Input 
        color="light-blue" 
        label="Song Title" 
        value={formData.name}
        onChange={handleInputChange('name')}
        className="placeholder-light-blue-400" 
      />

      <Typography className="text-black">Optional fields:</Typography>
      
      <Input 
        color="light-blue" 
        label="Artist (Optional)" 
        value={formData.artist}
        onChange={handleInputChange('artist')}
      />
      
      <Input 
        color="light-blue" 
        label="Additional Notes/Requests (Optional)" 
        value={formData.remarks}
        onChange={handleInputChange('remarks')}
      />
      
      <Button 
        className={`my-4 ${UI_CONSTANTS.colors.secondary}`}
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </Button>
      
      <StatusMessage state={requestState} />
    </CardContainer>
  );
}
