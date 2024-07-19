import { ArrowRightIc, CheckItemIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';
import styled from '@emotion/styled';
import { 약관_LIST } from '@pages/onboarding/constants';
import { JoinContextType } from '@pages/onboarding/type';
import { useState } from 'react';
import { Link, useLocation, useNavigate, useOutletContext } from 'react-router-dom';

const Step약관동의 = () => {
  const { data, setData } = useOutletContext<JoinContextType>();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [agreement, setAgreement] = useState(data.isSubscribed);

  const handleClickCheck = (id: number | 'all') => {
    if (id === 'all') {
      if (!agreement.some((v) => !v)) setAgreement(Array(5).fill(false));
      else setAgreement(Array(5).fill(true));
    } else {
      setAgreement((prev) => agreement.with(id, !prev[id]));
    }
  };
  const handleClickLink = () => {
    setData((prev) => ({
      ...prev,
      isSubscribed: agreement,
    }));
    navigate(pathname.includes('senior') ? '/seniorOnboarding/2' : '/juniorOnboarding/2');
  };

  return (
    <Wrapper>
      <ItemWrapper type="button" onClick={() => handleClickCheck('all')}>
        <ItemLeftWrapper>
          <IconWrapper $isChecked={!agreement.some((v) => !v)}>
            <CheckItemIc />
          </IconWrapper>
          <Item>전체 동의</Item>
        </ItemLeftWrapper>
      </ItemWrapper>
      <Line />
      {약관_LIST.map(({ text, link }, idx) => (
        <li key={text}>
          <ItemWrapper type="button" onClick={() => handleClickCheck(idx)}>
            <ItemLeftWrapper>
              <IconWrapper $isChecked={agreement[idx]}>
                <CheckItemIc />
              </IconWrapper>
              <Item>{text}</Item>
            </ItemLeftWrapper>
            <Link to={link ? link : ''} target="_blank" onClick={(e) => link || e.preventDefault()}>
              {idx < 2 && <ArrowRightIc />}
            </Link>
          </ItemWrapper>
        </li>
      ))}
      <FullBtn isActive={agreement[0] && agreement[1] && agreement[2] && agreement[3]} onClick={handleClickLink} />
    </Wrapper>
  );
};

export default Step약관동의;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;

  padding-top: 1.3rem;
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

const IconWrapper = styled.i<{ $isChecked: boolean }>`
  & path {
    fill: ${({ $isChecked, theme }) => ($isChecked ? theme.colors.Blue : theme.colors.grayScaleLG2)};
  }
`;
