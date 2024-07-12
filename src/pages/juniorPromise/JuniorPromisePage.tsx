import { TempLogoIc, AlarmIc } from '@assets/svgs';
import { Header } from '@components/commons/Header';
import Nav from '@components/commons/Nav';
import SeniorCard from '@components/commons/seniorCard/SeniorCard';
import styled from '@emotion/styled';
import { useState } from 'react';
import { BottomSheet } from './components/BottomSheetBg';
import { SeniorListBackground } from './components/SeniorListBackground';
import { FIELD_LIST } from './constants/fieldList';
import { POSITION_LIST } from './constants/positionList';
import { SENIOR_LIST } from '../../components/commons/seniorCard/seniorCardConstants';

const JuniorPromisePage = () => {
  const { seniorList } = SENIOR_LIST;
  const [filterActiveBtn, setFilterActiveBtn] = useState('');
  const [listedField, setListedField] = useState<string[]>([]); // 계열 목록 저장
  const [listedPosition, setListedPosition] = useState<string[]>([]); // 직무 목록 저장

  const handleSheetClose = () => {
    setFilterActiveBtn('');
  };
  const onField = () => {
    setFilterActiveBtn('계열');

    setListedField(FIELD_LIST.fieldList.map((item) => item.field)); // 모든 계열 렌더링
  };

  const onPosition = () => {
    setFilterActiveBtn('직무');

    setListedPosition(POSITION_LIST.positionList.map((item) => item.position)); //모든 직무 렌더링
  };

  return (
    <>
      <Header LeftSvg={TempLogoIc} RightSvg={AlarmIc} />
      <SeniorListBackground onField={onField} onPosition={onPosition}>
        <SeniorListWrapper>
          {seniorList.map((list) => (
            <SeniorCard
              key={list.seniorId}
              nickname={list.nickname}
              company={list.company}
              field={list.field}
              position={list.position}
              detailPosition={list.detailPosition}
              level={list.level}
            />
          ))}
        </SeniorListWrapper>
        <Nav />
      </SeniorListBackground>
      <BottomSheet
        filterActiveBtn={filterActiveBtn}
        handleSheetClose={handleSheetClose}
        field={listedField} // BottomSheet에 계열 목록 전달
        position={listedPosition} //BottomSheet에 직무 목록 전달
        onField={onField}
        onPosition={onPosition}
      />
    </>
  );
};

export default JuniorPromisePage;

const SeniorListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding: 0.8rem 2rem;
`;
