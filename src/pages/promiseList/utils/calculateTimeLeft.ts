// targetDate :  "2024.07.11"
// targetTime : "18:00"
export const calculateTimeLeft = (
  targetDate: string,
  targetTime: string,
): { diffText: string; diff: number; dDayDiff: number } => {
  // 날짜 date 객체 형태로 변경
  const formattedDate = targetDate.replace(/\./g, '-');
  // 시간까지 추가한 date객체 생성
  const targetDateTime = new Date(`${formattedDate}T${targetTime}`);
  // 현재 시간
  const currentDate = new Date();
  // 현재 시간에서 약속까지 남은 시간
  const diff = targetDateTime.getTime() - currentDate.getTime();

  if (diff <= 0) {
    return { diffText: '지금 입장하기', diff, dDayDiff: 0 };
  }

  // 일, d-day용 일, 시, 분 추출
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const dDayDiff = Math.round(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  // 화면에 나오는 텍스트 형식으로 변경
  const diffText = `${String(days).padStart(2, '0')}일 ${String(hours).padStart(2, '0')}시 ${String(minutes).padStart(2, '0')}분`;

  return { diff, diffText, dDayDiff };
};
