export function getLevelName(level: number): string {
  if (level >= 1 && level <= 4) {
    return '주니어';
  } else if (level >= 5 && level <= 8) {
    return '미들';
  } else if (level >= 9 && level <= 12) {
    return '시니어';
  } else {
    return '익스퍼트';
  }
}
