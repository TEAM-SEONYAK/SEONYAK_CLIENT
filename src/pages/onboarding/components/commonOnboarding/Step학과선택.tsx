import { CheckItemIc } from '@assets/svgs';
import WarnDescription from '@components/commons/WarnDescription';
import styled from '@emotion/styled';
import MajorChip from '@pages/onboarding/components/MajorChip';
import { useEffect, useState } from 'react';
import SearchBox from '../SearchBox';
import { FullBtn } from '@components/commons/FullButton';
import { useNavigate } from 'react-router-dom';
import useSearchDeptQuery from '@pages/onboarding/hooks/useSearchDeptQuery';

const Step학과선택 = () => {
  const ROLE = 'SENIOR'; // 임시
  const navigate = useNavigate();
  const handleClickLink = () => {
    if (ROLE === 'SENIOR') navigate('/seniorOnboarding/6');
    else alert('온보딩 끝!');
  };

  const [searchValue, setSearchValue] = useState('');
  const [selectedMajors, setSelectedMajors] = useState<string[]>([]);
  const [isExceed, setIsExceed] = useState(false);
  const handleSearchValue = (searchedValue: string) => {
    setSearchValue(searchedValue);
  };

  const handleSelectMajors = (selectedValue: string) => {
    // setSelectedMajors((prev) =>
    //   prev?.includes(selectedValue) ? prev.filter((detail) => detail !== selectedValue) : [...prev, selectedValue],
    // );
    setSelectedMajors([selectedValue]);
  };

  const handleChipClose = (deleteMajor: string) => {
    setSelectedMajors((prev) => prev.filter((p) => p !== deleteMajor));
  };

  useEffect(() => {
    if (selectedMajors.length > 0) {
      setIsExceed(true);
    }
    if (selectedMajors.length < 1) {
      setIsExceed(false);
    }
  }, [selectedMajors]);

  console.log(useSearchDeptQuery('이화여자대학교', searchValue));

  const dummyMajor = ['사회과학', '윤서진~나 사랑해 윤서진~나 좋아', '보고싶어', '안녕하세요'];
  return (
    <Wrapper>
      {selectedMajors.length > 0 && (
        <>
          <ChipWrapper>
            {selectedMajors.slice(0, 1).map((sm) => (
              <MajorChip key={sm} major={sm} handleClose={handleChipClose} />
            ))}
          </ChipWrapper>
          <WarnWrapper>
            <WarnDescription isShown={isExceed} warnText="학과는 최대 1개 선택할 수 있어요." />
          </WarnWrapper>
        </>
      )}
      <SearchBox placeholder="학과명을 입력해 주세요" searchValue={searchValue} handleSearchValue={handleSearchValue} />
      <SearchListWrapper>
        {dummyMajor.map((m) => (
          <SearchList key={m} handleSelectMajors={handleSelectMajors} majorName={m} selectedMajors={selectedMajors} />
        ))}
      </SearchListWrapper>
      <FullBtn isActive={selectedMajors.length > 0} onClick={handleClickLink} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
`;

const ChipWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  width: 100%;
  padding-bottom: 2rem;
`;

const WarnWrapper = styled.section`
  margin: -0.6rem 0 1.5rem;
`;

const SearchListWrapper = styled.article`
  overflow-y: scroll;

  height: 22.1rem;
  padding: 0.5rem 1rem;
`;

export default Step학과선택;

interface searchListPropType {
  handleSelectMajors: (selectedValue: string) => void;
  majorName: string;
  selectedMajors: string[];
}

const SearchList = ({ handleSelectMajors, majorName, selectedMajors }: searchListPropType) => {
  const isActive = selectedMajors.includes(majorName);
  const handleClick = () => {
    handleSelectMajors(majorName);
  };
  return (
    <SearchListContainer onClick={handleClick}>
      <MajorText $isActive={isActive}>{majorName}</MajorText>
      <IconWrapper $isActive={isActive}>
        <CheckItemIc />
      </IconWrapper>
    </SearchListContainer>
  );
};

const SearchListContainer = styled.section`
  display: flex;
  justify-content: space-between;

  width: 100%;

  cursor: pointer;
`;

const MajorText = styled.p<{ $isActive: boolean }>`
  padding: 0.65rem 0;

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.Blue : '')};

  ${({ theme }) => theme.fonts.Body3_SB_14};
`;

const IconWrapper = styled.i<{ $isActive: boolean }>`
  & svg {
    fill: ${({ theme, $isActive }) => ($isActive ? theme.colors.Blue : '')};
  }
`;
