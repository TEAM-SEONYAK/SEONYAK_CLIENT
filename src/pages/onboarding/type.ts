export interface DeptType {
  deptName: string;
  isClosed: boolean;
}

export interface BizInfoType {
  company: string;
  phoneNumber: string;
}

export interface JoinRequesetType {
  userType: string;
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
  data: JoinRequesetType;
  setData: React.Dispatch<React.SetStateAction<JoinRequesetType>>;
}
