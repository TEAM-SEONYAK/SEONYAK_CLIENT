const convertToGroupStep = (role: 'SENIOR' | 'JUNIOR', step: number): number => {
  if (role === 'SENIOR') {
    if (step === 1) return 1;
    if (step === 2) return 2;
    if (step <= 6 && step >= 1) return 3;
    return 4;
  } else {
    if (step === 1) return 1;
    if (step <= 3 && step >= 2) return 2;
    return 3;
  }
};

export default convertToGroupStep;
