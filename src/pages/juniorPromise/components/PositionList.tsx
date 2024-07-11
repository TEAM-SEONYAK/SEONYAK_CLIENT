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
  gap: 4px;
  align-items: center;

  height: 40px;
  padding: 8px 16px;
  border: 0.406px solid ${({ theme }) => theme.colors.grayScaleLG2};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.grayScaleLG2};

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;
