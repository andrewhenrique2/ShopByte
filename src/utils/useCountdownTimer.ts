// src/hooks/useCountdownTimer.ts
import { useState, useEffect } from 'react';

const useCountdownTimer = (endTime: string | undefined) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const updateTimeLeft = () => {
      if (endTime) {
        const end = new Date(endTime).getTime();
        const now = new Date().getTime();
        const distance = end - now;

        if (distance < 0) {
          setTimeLeft(0);
        } else {
          setTimeLeft(distance);
        }
      }
    };

    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  const formatTime = (ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return { timeLeft, formatTime };
};

export default useCountdownTimer;
