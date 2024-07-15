interface isTimeActivePropType {
  startTime: string;
  endTime: string;
  curTime: string;
}

export const isTimeTableFill = ({ startTime, endTime, curTime }: isTimeActivePropType) => {
  const convertToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startMinutes = convertToMinutes(startTime);
  const endMinutes = convertToMinutes(endTime);
  const curMinutes = convertToMinutes(curTime);

  return curMinutes >= startMinutes && curMinutes <= endMinutes;
};
