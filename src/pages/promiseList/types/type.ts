export interface profileCardDataType {
  appointmentId: number;
  appointmentStatus: string;
  nickname: string;
  image: string;
  field: string;
  department?: string;
  topic?: string[];
  personalTopic?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  company?: string;
  position?: string;
  detailPosition?: string;
  level?: string;
}
