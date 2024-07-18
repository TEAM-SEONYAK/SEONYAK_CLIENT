export function getDayOfWeek(dateString: string) {
  const date = new Date(dateString);
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}
