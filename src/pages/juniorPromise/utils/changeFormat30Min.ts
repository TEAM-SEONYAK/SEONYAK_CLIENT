export function splitTimeRange(startTime: string, endTime: string) {
  const timeSlots = [];
  let start = new Date(`1970-01-01T${startTime}:00`);
  const end = new Date(`1970-01-01T${endTime}:00`);

  while (start < end) {
    const nextStart = new Date(start.getTime() + 30 * 60000); // 30분 더하기
    const formattedStart = start.toTimeString().slice(0, 5);
    const formattedEnd = nextStart.toTimeString().slice(0, 5);
    timeSlots.push({ startTime: formattedStart, endTime: formattedEnd });
    start = nextStart;
  }

  return timeSlots;
}
