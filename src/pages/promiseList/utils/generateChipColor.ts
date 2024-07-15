export const generateRandomBgColor = (randomNum: number) => {
  switch (randomNum) {
    case 0:
      return 'chipBlueBg';
    case 1:
      return 'chipGreenBg';
    case 2:
      return 'chipPurpleBg';
    default:
      return 'chipBlueBg';
  }
};

export const generateRandomColor = (randomNum: number) => {
  switch (randomNum) {
    case 0:
      return 'chipBlueText';
    case 1:
      return 'chipGreenText';
    case 2:
      return 'chipPurpleText';
    default:
      return 'chipBlueText';
  }
};
