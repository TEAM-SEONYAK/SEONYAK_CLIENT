import styled from '@emotion/styled';
import SeniorCard from '../../components/\bSeniorCard';
import { SENIOR_LIST } from '../../components/seniorCardConstants';

const JuniorPromisePage = () => {
  const { seniorList } = SENIOR_LIST;
  return (
    <TestDiv>
      {seniorList.map((List) => (
        <SeniorCard
          key={List.seniorId}
          nickname={List.nickname}
          company={List.company}
          field={List.field}
          position={List.position}
          level={List.level}
        />
      ))}
    </TestDiv>
  );
};

export default JuniorPromisePage;

const TestDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding: 0.8rem 2rem;
`;
