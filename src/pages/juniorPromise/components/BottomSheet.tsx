import { ReloadIc } from '@assets/svgs';
import ToggleButton from '@components/commons/ToggleButton';
import styled from '@emotion/styled';
import { FieldList } from './FieldList';
import { PositionList } from './PositionList';
import { FIELD_LIST } from '../constants/fieldList';
import { POSITION_LIST } from '../constants/positionList';

interface BottomSheetPropTypes {
  filterActiveBtn: string;
  handleFilterActiveBtn: (btnText: string) => void;
  isBottomSheetOpen: boolean;
  handleCloseBottomSheet: () => void;
  handleChipPosition: (positionName: string) => void;
  handleChipField: (fieldName: string) => void;

  handleReset: () => void;
  chipFieldName: string[];
  pushFieldList: (chipName: string) => void;
  chipPositionName: string[];
  pushPositionList: (chipName: string) => void;
}

interface SelectedChipListProps {
  $chipFieldName: string[];
  $chipPositionName: string[];
}

export const BottomSheet = (props: BottomSheetPropTypes) => {
  const {
    chipFieldName,
    chipPositionName,
    filterActiveBtn,
    handleFilterActiveBtn,
    isBottomSheetOpen,
    handleCloseBottomSheet,
    handleChipPosition,
    handleChipField,
    handleReset,
  } = props;

  return (
    <>
      <Background $isBottomSheetOpen={isBottomSheetOpen} onClick={handleCloseBottomSheet} />
      <BottomSheetWrapper $isBottomSheetOpen={isBottomSheetOpen}>
        <TitleLayout>
          <Line />
          <Title>원하는 선배를 찾아볼까요?</Title>
          <Desc>계열, 직무로 원하는 선배를 찾을 수 있어요.</Desc>
        </TitleLayout>
        <ToggleButton
          left="계열"
          right="직무"
          activeButton={filterActiveBtn}
          onSetActiveButtonHandler={handleFilterActiveBtn}
        />
        <Content>
          {filterActiveBtn === '계열' ? (
            <FieldLayout>
              {FIELD_LIST.map((list) => (
                <FieldList
                  key={list.id}
                  field={list.field}
                  handleChipField={handleChipField}
                  chipFieldName={chipFieldName}
                />
              ))}
            </FieldLayout>
          ) : (
            <PositionLayout>
              {POSITION_LIST.map((list) => (
                <PositionList
                  key={list.id}
                  position={list.position}
                  handleChipPosition={handleChipPosition}
                  chipPositionName={chipPositionName}
                />
              ))}
            </PositionLayout>
          )}
        </Content>
        <ButtonLayout>
          <ReloadIcon type="button" onClick={handleReset}>
            <ReloadIc />
          </ReloadIcon>
          <ExitBottomSheet
            type="button"
            $chipFieldName={chipFieldName}
            $chipPositionName={chipPositionName}
            onClick={handleCloseBottomSheet}>
            적용할래요
          </ExitBottomSheet>
        </ButtonLayout>
      </BottomSheetWrapper>
    </>
  );
};

const Background = styled.div<{ $isBottomSheetOpen: boolean }>`
  display: ${({ $isBottomSheetOpen }) => ($isBottomSheetOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 100dvh;

  background: ${({ theme }) => theme.colors.transparentBlack_65};
`;

const BottomSheetWrapper = styled.form<{ $isBottomSheetOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  z-index: 4;

  width: 100%;
  height: auto;
  border-radius: 16px 16px 0 0;

  background: ${({ theme }) => theme.colors.grayScaleWhite};

  opacity: ${({ $isBottomSheetOpen }) => ($isBottomSheetOpen ? 1 : 0)};
  transform: translateY(${({ $isBottomSheetOpen }) => ($isBottomSheetOpen ? '0' : '100%')});

  transition:
    transform 250ms ease-in-out,
    opacity 250ms ease-in-out;
`;

const TitleLayout = styled.header`
  padding: 1.4rem 16.1rem 1.6rem 2rem;
`;

const Content = styled.div`
  overflow: auto;

  height: 35.2rem;
`;

const FieldLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 2rem;
  padding: 1rem 0;
`;

const PositionLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 1rem;
  flex-shrink: 0;

  margin: 1rem 2rem;
`;

const Line = styled.div`
  width: 4.7rem;
  height: 0.3rem;
  margin: 0 14.4rem 3.3rem;
  border-radius: 5px;

  background: ${({ theme }) => theme.colors.grayScaleLG2};
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const Desc = styled.p`
  ${({ theme }) => theme.fonts.Caption1_R_12};
  color: ${({ theme }) => theme.colors.grayScaleMG1};
`;

const ButtonLayout = styled.footer`
  display: flex;
  gap: 1.1rem;
  justify-content: center;
  align-items: center;

  margin-bottom: 2.6rem;
  padding: 0.3rem 2rem;
`;

const ReloadIcon = styled.button`
  width: 5rem;
  height: 5rem;
  padding: 1.8rem 1.8rem 1.898rem 1.9rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.grayScaleLG2};
`;

const ExitBottomSheet = styled.button<SelectedChipListProps>`
  width: 27.4rem;
  height: 5rem;
  border-radius: 8px;

  background: ${({ theme, $chipPositionName, $chipFieldName }) =>
    $chipFieldName.length > 0 || $chipPositionName.length > 0 ? theme.colors.Blue : theme.colors.grayScaleMG1};

  color: ${({ theme }) => theme.colors.grayScaleWhite};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;
