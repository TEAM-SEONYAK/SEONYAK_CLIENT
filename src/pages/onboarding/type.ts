export interface DeptType {
  deptName: string;
  isClosed: boolean;
}

export interface BizInfoType {
  company: string;
  phoneNumber: string;
}

export interface JoinPropType {
  userType: number;
  isSubscribed: boolean[];
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
export interface JoinRequesetType {
  userType: number;
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
