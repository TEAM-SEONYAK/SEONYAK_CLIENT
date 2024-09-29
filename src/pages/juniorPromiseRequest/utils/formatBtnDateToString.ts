export const formatBtnDateToString = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
  const day = date.getDate();

  return `${month}월 ${day}일`;
};
