export const setToken = (token: string) => {
  localStorage.setItem('seonyakToken', token);
};

export const getToken = () => {
  return localStorage.getItem('seonyakToken');
};

export const setRole = (role: string) => {
  localStorage.setItem('seonyakRole', role);
};

export const getRole = () => {
  return localStorage.getItem('seonyakRole');
};

export const clearStorage = () => {
  localStorage.removeItem('seonyakToken');
  localStorage.removeItem('seonyakRole');
  localStorage.removeItem('seniorNickname');
  localStorage.removeItem('seniorId');
};

// 온보딩 완료 후 프로필 등록 안 하고 이탈한 선배 정보 저장
export const setSeniorNickname = (nickname: string) => {
  localStorage.setItem('seniorNickname', nickname);
};

export const getSeniorNickname = () => {
  return localStorage.getItem('seniorNickname');
};

export const setSeniorId = (id: string) => {
  localStorage.setItem('seniorId', id);
}

export const getSeniorId = () => {
  return localStorage.getItem('seniorId');
}