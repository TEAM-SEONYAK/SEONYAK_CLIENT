// 계열, 직무로 필터링하여 선배 조회
// 200(OK): 성공
export const FILTER_SENIOR_CARD_LIST = [
  {
    myNickname: 'you의 닉네임이여요',
    seniorList: [
      {
        seniorId: 1,
        nickname: '범이에요',
        company: '선약회사',
        image: 'image.jpg',
        position: '디자인',
        detailPosition: '디자이너',
        field: '예체능계열',
        level: '5',
      },
      {
        seniorId: 2,
        nickname: '김도현',
        company: '선약회사',
        image: 'image.jpg',
        position: '서비스 기획 ・ 운영',
        detailPosition: '팀 리더',
        field: '공학계열',
        level: '2',
      },
      {
        seniorId: 3,
        nickname: '조숭숭',
        company: '선약회사',
        image: 'image.jpg',
        position: '개발',
        detailPosition: '프론트엔드 개발자',
        field: '공학계열',
        level: '12',
      },
    ],
  },
];
