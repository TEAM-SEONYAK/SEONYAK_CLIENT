export const setToken = (token: string) => {
  localStorage.setItem('accessToken', token);
};

export const getToken = () => {
  return localStorage.getItem('accessToken');
};

export const setRole = (role: string) => {
  localStorage.setItem('role', role);
};

export const getRole = () => {
  return localStorage.getItem('role');
};
