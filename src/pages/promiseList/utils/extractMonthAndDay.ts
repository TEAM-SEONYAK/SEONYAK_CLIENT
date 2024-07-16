export const extractMonthAndDay = (dateString: string) => {
  // 날짜 문자열을 '.' 기준으로 분할
  const dateParts = dateString.split('.');

  // 분할된 배열에서 달과 일을 추출하고, 정수로 변환
  const month = parseInt(dateParts[1], 10);
  const day = parseInt(dateParts[2], 10);

  return { month, day };
};
