import { useState, useCallback } from 'react';
import { RequestState, SongRequest } from '@/types';
import { FORM_VALIDATION } from '@/constants';
import { addSongRequest, checkUniqueTitle } from '@/lib/firebase';

export function useSongRequest() {
  const [requestState, setRequestState] = useState<RequestState>({
    status: 'idle',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const submitSongRequest = useCallback(async (songData: Omit<SongRequest, 'id' | 'created'>) => {
    if (!songData.name.trim()) {
      setRequestState({
        status: 'error',
        message: FORM_VALIDATION.requiredFields.songTitle
      });
      return;
    }

    setIsLoading(true);
    setRequestState({ status: 'loading', message: '' });

    try {
      const isUnique = await checkUniqueTitle(
        songData.name.toLowerCase().trim(), 
        songData.artist.toLowerCase().trim()
      );

      if (isUnique) {
        await addSongRequest(
          songData.name.toLowerCase().trim(),
          songData.artist.toLowerCase().trim(),
          songData.remarks.toLowerCase().trim()
        );
        setRequestState({
          status: 'success',
          message: FORM_VALIDATION.messages.songAdded
        });
      } else {
        setRequestState({
          status: 'warning',
          message: FORM_VALIDATION.messages.songAlreadyRequested
        });
      }
    } catch (error) {
      setRequestState({
        status: 'error',
        message: 'Failed to submit request. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearState = useCallback(() => {
    setRequestState({ status: 'idle', message: '' });
  }, []);

  return {
    requestState,
    isLoading,
    submitSongRequest,
    clearState
  };
}
