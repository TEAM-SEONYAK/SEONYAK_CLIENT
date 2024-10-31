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
};
