export const calculateTimeLeft = (
  targetDate: string,
  targetTime: string,
): { days: number; hours: number; minutes: number; diffText: string; diff: number; dDayDiff: number } => {
  const formattedDate = targetDate.replace(/\./g, '-');
  const targetDateTime = new Date(`${formattedDate}T${targetTime}`);

  const currentDate = new Date();

  const diff = targetDateTime.getTime() - currentDate.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, diffText: '지금 입장하기', diff, dDayDiff: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const dDayDiff = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  const diffText = `${String(days).padStart(2, '0')}일 ${String(hours).padStart(2, '0')}시 ${String(minutes).padStart(2, '0')}분`;

  return { days, hours, minutes, diff, diffText, dDayDiff };
};
