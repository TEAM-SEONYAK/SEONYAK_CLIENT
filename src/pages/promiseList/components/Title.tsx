import styled from '@emotion/styled';

interface TitlePropType {
  nickname: string;
  userRole: string;
  count: number;
}
const Title = (props: TitlePropType) => {
  const { nickname, userRole, count } = props;
  return (
    <Wrapper>
      {count ? (
        <>
          {`${nickname} ${userRole === 'SENIOR' ? '선배' : '후배'}, \n다가오는 선약이 `}
          <Count>{count}개</Count>
          {` 있어요`}
        </>
      ) : (
        `${nickname} ${userRole === 'SENIOR' ? '선배' : '후배'}, \n아직 다가오는 선약이 없어요`
      )}
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.h1`
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.colors.grayScaleBG};
  white-space: pre-wrap;
  ${({ theme }) => theme.fonts.Head1_SB_20};
`;

const Count = styled.span`
  color: ${({ theme }) => theme.colors.Blue};
`;
