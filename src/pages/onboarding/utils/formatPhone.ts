export const formatPhone = (raw: string) => {
  if (!raw) return raw;
  const value = raw.replace(/[^\d]/g, '');
  const front = value.slice(0, 3);
  const middle = value.slice(3, 7);
  const last = value.slice(7, 11);

  let result = '';
  if (front) {
    result += front;
  }
  if (middle) {
    result += `-${middle}`;
  }
  if (last) {
    result += `-${last}`;
  }

  return result;
};
