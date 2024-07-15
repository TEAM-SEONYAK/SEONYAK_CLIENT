import { ArrowRightIc, CheckItemIc } from '@assets/svgs';
import styled from '@emotion/styled';
import { 약관_LIST } from '@pages/onboarding/constants';
import { Link } from 'react-router-dom';

const Step약관동의 = () => {
  return (
    <Wrapper>
      <ItemWrapper type="button">
        <ItemLeftWrapper>
          <CheckItemIcon />
          <Item>전체 동의</Item>
        </ItemLeftWrapper>
      </ItemWrapper>
      <Line />
      {약관_LIST.map(({ text, link }, idx) => (
        <li key={text}>
          <ItemWrapper type="button" onClick={() => console.log('클릭')}>
            <ItemLeftWrapper>
              <CheckItemIcon />
              <Item>{text}</Item>
            </ItemLeftWrapper>
            <Link to={link ? link : ''} target="_blank" onClick={(e) => link || e.preventDefault()}>
              {idx < 2 && <ArrowRightIc />}
            </Link>
          </ItemWrapper>
        </li>
      ))}
    </Wrapper>
  );
};

export default Step약관동의;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ItemWrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 3.8rem;
`;

const ItemLeftWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Item = styled.span`
  ${({ theme }) => theme.fonts.Body1_M_14};
`;

const Line = styled.hr`
  width: 100%;
  height: 0.1rem;
  border: 0;

  background-color: ${({ theme }) => theme.colors.grayScaleLG2};
`;

const CheckItemIcon = styled(CheckItemIc)`
  & path {
    fill: ${({ theme }) => theme.colors.grayScaleLG2};
  }
`;
