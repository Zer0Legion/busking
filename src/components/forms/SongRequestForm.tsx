import { useEffect, useState } from "react";
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
  const [requesterIp, setRequesterIp] = useState("");
  const [formData, setFormData] = useState<Omit<SongRequest, 'id' | 'created'>>({
    name: "",
    artist: "",
    remarks: "",
    requesterIp: ""
  });

  const { requestState, isLoading, submitSongRequest } = useSongRequest();

  useEffect(() => {
    const fetchRequesterIp = async () => {
      try {
        const response = await fetch("/api/request-ip");
        const data = await response.json();
        setRequesterIp(data.ip || "unknown");
      } catch (error) {
        console.error("Failed to load requester IP:", error);
        setRequesterIp("unknown");
      }
    };

    fetchRequesterIp();
  }, []);

  const handleSubmit = async () => {
    const submitted = await submitSongRequest({
      ...formData,
      requesterIp: requesterIp || "unknown"
    });

    if (submitted) {
      setFormData({ name: "", artist: "", remarks: "", requesterIp: "" });
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
