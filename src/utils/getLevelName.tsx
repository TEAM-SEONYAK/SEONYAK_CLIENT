export function getLevelName(level: string): string {
  const levelNum = parseInt(level, 10);

  if (levelNum >= 1 && levelNum <= 4) {
    return '주니어';
  } else if (levelNum >= 5 && levelNum <= 8) {
    return '미들';
  } else if (levelNum >= 9 && levelNum <= 12) {
    return '시니어';
  }

  return '익스퍼트';
}
