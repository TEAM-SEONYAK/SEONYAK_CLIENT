export const calculateTimeLeft = (
  targetDate: string,
  targetTime: string,
): { days: number; hours: number; minutes: number; diffText: string } => {
  const formattedDate = targetDate.replace(/\./g, '-');
  const targetDateTime = new Date(`${formattedDate}T${targetTime}`);

  const currentDate = new Date();

  const diff = targetDateTime.getTime() - currentDate.getTime();

  if (diff <= 0) {
    return '00일 00시 00분';
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  const diffText = `${String(days).padStart(2, '0')}일 ${String(hours).padStart(2, '0')}시 ${String(minutes).padStart(2, '0')}분`;

  return { days, hours, minutes, diffText };
};
