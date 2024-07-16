export const formatDate = (dateString: string) => {
  // 날짜 문자열을 '.' 기준으로 분할
  const dateParts = dateString.split('.');

  // 연, 월, 일을 변수에 저장
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  // 원하는 형식으로 문자열 조합
  return `${year}년 ${parseInt(month, 10)}월 ${parseInt(day, 10)}일`;
};
