export const getEmptyMessage = (tap: string) => {
  switch (tap) {
    case 'pending':
      return '확정 대기 중인 약속이 없어요';
    case 'scheduled':
      return '예정된 약속이 없어요';
    case 'past':
      return '지난 약속이 없어요';
    default:
      return '약속이 없어요';
  }
};
