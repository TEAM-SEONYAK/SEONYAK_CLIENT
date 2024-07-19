type TimeSlot = {
  startTime: string;
  endTime: string;
};

type Schedule = {
  [key: string]: TimeSlot[];
};

export function extractValidKeys(schedule: Schedule) {
  return Object.entries(schedule)
    .filter(([key, timeSlots]) => {
      // 각 key에 대한 timeSlots를 검사
      return timeSlots.some((timeSlot) => timeSlot.startTime !== '시작 시간' && timeSlot.endTime !== '마지막 시간');
    })
    .map(([key]) => key); // 조건을 만족하는 key만 추출
}
