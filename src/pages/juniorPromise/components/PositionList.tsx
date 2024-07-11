import styled from '@emotion/styled';

interface IPositionList {
  position: string;
}
export const PositionList = ({ position }: IPositionList) => {
  return (
    <>
      <PositionTitle>{position}</PositionTitle>
    </>
  );
};

const PositionTitle = styled.p`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  height: 4rem;
  padding: 0.8rem 1.6rem;
  border: 0.406px solid ${({ theme }) => theme.colors.grayScaleLG2};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.grayScaleLG2};

  color: ${({ theme }) => theme.colors.grayScaleDG};
  ${({ theme }) => theme.fonts.Caption2_SB_12};
`;
