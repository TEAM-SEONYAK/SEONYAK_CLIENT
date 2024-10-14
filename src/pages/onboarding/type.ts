export interface DeptType {
  deptName: string;
  isClosed: boolean;
}

export interface BizInfoType {
  company: string;
  phoneNumber: string;
}

export interface JoinPropType {
  role: 'SENIOR' | 'JUNIOR';
  isSubscribed: boolean[];
  nickname: string;
  isNicknameValid: boolean;
  image: string;
  imageFile?: File;
  phoneNumber: string;
  univName: string;
  field: string;
  departmentList: string[];
  businessCard?: string;
  company?: string;
  position?: string;
  detailPosition?: string;
  level?: string;
}
export interface JoinRequesetType {
  role: 'SENIOR' | 'JUNIOR';
  isSubscribed: boolean;
  nickname: string;
  image: string;
  phoneNumber: string;
  univName: string;
  field: string;
  departmentList: string[];
  businessCard?: string;
  company?: string;
  position?: string;
  detailPosition?: string;
  level?: string;
}

export interface JoinContextType {
  data: JoinPropType;
  setData: React.Dispatch<React.SetStateAction<JoinPropType>>;
}
