const onboardingKeys = {
  businessCardImage: ['/businesscard-image'],
  join: ['/auth/join'],
  nickname: ['/nickname'],
  businessCard: ['/ocr/business-card'],
  phoneVerify: ['/phone/verify'],
  phonVerifyCode: ['/phone/verifycode'],
  profileImage: ['/profile-image'],
  searchUniv: (univ: string) => [`/search?univName=${univ}`],
  searchDept: (univ: string, dept: string) => [`/search/dept?univName=${univ}&deptName=${dept}`],
  univVerify: ['/univ/verify'],
  univVerifycode: ['/univ/verifycode'],
};

export default onboardingKeys;
