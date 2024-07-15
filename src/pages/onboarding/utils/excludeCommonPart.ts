export const excludeCommonPart = ({ common, str }: { common: string, str: string }): string => {
  if (str.includes(common)) {
    return str.replace(common, '');
  }
  return str;
};
