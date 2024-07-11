import { SeniorListBackground } from './components/SeniorListBackground';
import SeniorCard from '@components/commons/seniorCard/SeniorCard';
import styled from '@emotion/styled';
import { SENIOR_LIST } from '../../components/commons/seniorCard/seniorCardConstants';

const JuniorPromisePage = () => {
  const { seniorList } = SENIOR_LIST;
  return (
    <SeniorListBackground>
    <SeniorListWrapper>
      {seniorList.map((List) => (
        <SeniorCard
          key={List.seniorId}
          nickname={List.nickname}
          company={List.company}
          field={List.field}
          position={List.position}
          detailPosition={List.detailPosition}
          level={List.level}
        />
      ))}
    </SeniorListWrapper>
      </SeniorListBackground >
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
