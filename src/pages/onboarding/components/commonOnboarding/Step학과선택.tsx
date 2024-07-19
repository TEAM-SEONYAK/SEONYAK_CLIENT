import { CheckItemIc } from '@assets/svgs';
import WarnDescription from '@components/commons/WarnDescription';
import styled from '@emotion/styled';
import MajorChip from '@pages/onboarding/components/MajorChip';
import { useEffect, useState } from 'react';
import SearchBox from '../SearchBox';
import { FullBtn } from '@components/commons/FullButton';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import useSearchDeptQuery from '@pages/onboarding/hooks/useSearchDeptQuery';
import { DeptType, JoinContextType } from '@pages/onboarding/type';
import useJoinQuery from '@pages/onboarding/hooks/useJoinQuery';

const Step학과선택 = () => {
  const { data, setData } = useOutletContext<JoinContextType>();
  const mutate = useJoinQuery();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');
  const [selectedMajors, setSelectedMajors] = useState<string[]>([]);
  const [isExceed, setIsExceed] = useState(false);
  const handleSearchValue = (searchedValue: string) => {
    setSearchValue(searchedValue);
  };

  const handleSelectMajors = (selectedValue: string) => {
    setSelectedMajors([selectedValue]);
  };

  const handleChipClose = (deleteMajor: string) => {
    setSelectedMajors((prev) => prev.filter((p) => p !== deleteMajor));
  };

  const handleClickLink = () => {
    setData((prev) => ({
      ...prev,
      departmentList: selectedMajors,
    }));
    if (pathname.includes('senior')) {
      navigate('/seniorOnboarding/6');
    } else {
      mutate.mutate(
        {
          ...data,
          isSubscribed: data.isSubscribed[4],
          departmentList: selectedMajors,
        },
        {
          onSuccess: () => {
            navigate('/juniorOnboardingComplete');
          },
          onError: (err) => {
            console.log(err);
          },
        },
      );
      alert('온보딩 끝!');
    }
  };

  useEffect(() => {
    if (selectedMajors.length > 0) {
      setIsExceed(true);
    }
    if (selectedMajors.length < 1) {
      setIsExceed(false);
    }
  }, [selectedMajors]);

  const list: DeptType[] = useSearchDeptQuery('이화여자대학교', searchValue);

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
      <Container>
        <SearchListWrapper>
          {list &&
            list.map(({ deptName }) => (
              <SearchList
                key={deptName}
                handleSelectMajors={handleSelectMajors}
                majorName={deptName}
                selectedMajors={selectedMajors}
              />
            ))}
        </SearchListWrapper>
      </Container>
      <FullBtn isActive={selectedMajors.length > 0} onClick={handleClickLink} />
    </Wrapper>
  );
};

const Container = styled.div`
  overflow: scroll;

  height: calc(100vh - 30rem);
  padding-bottom: 9.7rem;
`;
const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  height: 100dvh;
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
