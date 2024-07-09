import styled from '@emotion/styled';

const RecentCard = () => {
  // 약속 개수 임시 데이터
  const length = 0;
  return (
    <Wrapper>
      <RecentNav>
        <RecentDayWrapper>
          <RecentChip>{length ? '가장 가까운 약속' : '약속 없음'}</RecentChip>
          {/* 날짜 계산해서 넣어야 됨 */}
          <DdayCountChip>D-3</DdayCountChip>
        </RecentDayWrapper>
        <UserGuideBtn type="button">선약 이용방법 보기</UserGuideBtn>
      </RecentNav>
      <Divider />
    </Wrapper>
  );
};

export default RecentCard;

const Wrapper = styled.section`
  width: 100%;
  padding: 1rem 1.1rem 1rem 1rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const RecentNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.3rem;
`;

const RecentDayWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: flex-start;
  align-items: center;
`;

const RecentChip = styled.div`
  padding: 0.4rem 0.6rem;
  border-radius: 6px;

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  background-color: ${({ theme }) => theme.colors.grayScaleBG};

  color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const DdayCountChip = styled.div`
  padding: 0.4rem 0.6rem;

  /* 컬러 네이밍 반영 필요 */
  border: 1px solid rgb(255 57 80 / 40%);
  border-radius: 6px;

  background-color: rgb(255 57 80 / 15%);

  color: ${({ theme }) => theme.colors.Red};
`;

const UserGuideBtn = styled.button`
  padding: 0.4rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.grayScaleLG2};
  border-radius: 6px;

  color: ${({ theme }) => theme.colors.grayScaleMG1};

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  cursor: pointer;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.grayScaleLG1};
`;
