import styled from '@emotion/styled';
import { excludeCommonPart } from '@pages/onboarding/utils/excludeCommonPart';
import { useState } from 'react';
import SearchBox from '../SearchBox';
import { FullBtn } from '@components/commons/FullButton';
import FullBottomSheet from '@pages/onboarding/components/FullBottomSheet';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import useSearchUnivQuery from '@pages/onboarding/hooks/useSearchUnivQuery';
import { JoinContextType } from '@pages/onboarding/type';

const Step학교선택 = () => {
  const { data, setData } = useOutletContext<JoinContextType>();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const [selectedUniv, setSelectedUniv] = useState(data.univName);
  const handleOpenSheet = () => setIsOpenSheet(true);
  const handleCloseSheet = () => setIsOpenSheet(false);
  const handleSelectUniv = (selectValue: string) => {
    setSelectedUniv(selectValue);
  };
  const handleClickLink = () => {
    setData((prev) => ({
      ...prev,
      univName: selectedUniv,
    }));
    if (pathname.includes('senior')) {
      navigate('/seniorOnboarding/4');
    } else {
      navigate('/juniorOnboarding/5', { state: { univName: selectedUniv } });
    }
  };

  return (
    <Wrapper>
      <div style={{ padding: '0 2rem' }}>
        <SearchBox placeholder="학교명을 입력해 주세요" handleInputClick={handleOpenSheet} searchValue={selectedUniv} />
        {isOpenSheet && (
          <FullBottomSheet handleClose={handleCloseSheet} isSheetOpen={isOpenSheet}>
            <Sheet학교선택 handleSelectUniv={handleSelectUniv} handleClose={handleCloseSheet} />
          </FullBottomSheet>
        )}
      </div>
      <FullBtn isActive={selectedUniv !== ''} onClick={handleClickLink} />
    </Wrapper>
  );
};

export default Step학교선택;

const Wrapper = styled.div`
  width: 100%;
  margin: 2rem 2rem 0 0;
`;

interface Sheet학교선택PropType {
  handleSelectUniv: (selectValue: string) => void;
  handleClose: () => void;
}

const Sheet학교선택 = ({ handleSelectUniv, handleClose }: Sheet학교선택PropType) => {
  const [searchValue, setSearchValue] = useState('');
  const list: string[] = useSearchUnivQuery(searchValue);

  const handleListClick = (data: string) => {
    handleSelectUniv(data);
    handleClose();
  };
  return (
    <SheetWrapper>
      <SearchBox
        placeholder="학교명을 입력해 주세요"
        searchValue={searchValue}
        handleSearchValue={(selectedValue: string) => setSearchValue(selectedValue)}
        autoFocus
      />
      <Content>
        {list &&
          list.map((d) => (
            <ListWrapper key={d} onClick={() => handleListClick(d)}>
              <ListBold key={d + 'idx'}>{searchValue}</ListBold>
              <List key={d}>{excludeCommonPart({ common: searchValue, str: d })}</List>
            </ListWrapper>
          ))}
      </Content>
    </SheetWrapper>
  );
};

const SheetWrapper = styled.div`
  width: 100%;
  padding: 2.3rem 2rem 0;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 1.5rem 0 0 1rem;
`;

const ListWrapper = styled.section`
  display: flex;
`;

const ListBold = styled.span`
  ${({ theme }) => theme.fonts.Body3_SB_14};
`;

const List = styled.span`
  ${({ theme }) => theme.fonts.Body2_R_14};
`;
