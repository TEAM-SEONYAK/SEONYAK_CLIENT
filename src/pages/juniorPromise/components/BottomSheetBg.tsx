import { ReloadIc } from '@assets/svgs';
import ToggleButton from '@components/commons/ToggleButton';
import styled from '@emotion/styled';
import { FieldList } from './FieldList';
import { PositionList } from './PositionList';
import { FIELD_LIST } from '../constants/fieldList';
import { POSITION_LIST } from '../constants/positionList';

interface BottomSheetPropType {
  filterActiveBtn: string;
  handleSheetClose: () => void;
  field: string[];
  position: string[];
  // eslint-disable-next-line no-unused-vars
  handleFilterActiveBtn: (btnText: string) => void;
  onField: () => void;
  onPosition: () => void;
  isBottomSheetOpen: boolean;
  handleCloseBottomSheet: () => void;
}

export const BottomSheet = ({
  filterActiveBtn,
  handleSheetClose,
  // field,
  // position,
  handleFilterActiveBtn,
  isBottomSheetOpen,
  handleCloseBottomSheet,
}: BottomSheetPropType) => {
  // const [activeButton, setActiveButton] = useState(filterActiveBtn);

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
              {FIELD_LIST.fieldList
                .map((item) => item.field)
                .map((list) => (
                  <FieldList key={list} field={list} />
                ))}
            </FieldLayout>
          ) : (
            <PositionLayout>
              {POSITION_LIST.positionList
                .map((item) => item.position)
                .map((list) => (
                  <PositionList key={list} position={list} />
                ))}
            </PositionLayout>
          )}
        </Content>
        <ButtonLayout>
          <ReloadIcon type="reset">
            <ReloadIc />
          </ReloadIcon>
          <ExitBottomSheet type="button" onClick={handleCloseBottomSheet}>
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
  overflow: scroll;

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
  gap: 12px 10px;
  align-items: flex-start;
  align-content: flex-start;
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

const ExitBottomSheet = styled.button`
  width: 27.4rem;
  height: 5rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.grayScaleMG1};

  color: ${({ theme }) => theme.colors.grayScaleWhite};

  ${({ theme }) => theme.fonts.Head2_SB_18};
`;
