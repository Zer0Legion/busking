import { useState, useCallback } from 'react';
import { RequestState, Message } from '@/types';
import { FORM_VALIDATION } from '@/constants';
import { addMessage } from '@/lib/firebase';

export function useMessage() {
  const [messageState, setMessageState] = useState<RequestState>({
    status: 'idle',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const submitMessage = useCallback(async (messageData: Omit<Message, 'id' | 'created'>) => {
    if (messageData.message.length < FORM_VALIDATION.minMessageLength) {
      setMessageState({
        status: 'error',
        message: `Message must be at least ${FORM_VALIDATION.minMessageLength} characters long`
      });
      return;
    }

    setIsLoading(true);
    setMessageState({ status: 'loading', message: '' });

    try {
      await addMessage(messageData.from, messageData.message);
      setMessageState({
        status: 'success',
        message: 'Message sent successfully!'
      });
    } catch (error) {
      setMessageState({
        status: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearState = useCallback(() => {
    setMessageState({ status: 'idle', message: '' });
  }, []);

  return {
    messageState,
    isLoading,
    submitMessage,
    clearState
  };
}
