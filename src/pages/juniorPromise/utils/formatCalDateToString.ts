export const formatCalDateToString = (calendarDate: Date | string) => {
  const date = new Date(calendarDate);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줍니다.
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};
