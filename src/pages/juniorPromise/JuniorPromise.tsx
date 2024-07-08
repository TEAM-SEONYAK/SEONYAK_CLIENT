import SeniorCard from '../../components/\bSeniorCard';
import { SENIOR_LIST } from '../../components/seniorCardConstants';

const JuniorPromisePage = () => {
  const { seniorList } = SENIOR_LIST;
  return (
    <>
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
    </>
  );
};

export default JuniorPromisePage;
