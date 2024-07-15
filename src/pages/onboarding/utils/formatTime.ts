export const formatTime = (time: number): { minutes: string; seconds: string } => {
  const minutes = String(Math.floor((time / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, '0');
  return { minutes, seconds };
};
