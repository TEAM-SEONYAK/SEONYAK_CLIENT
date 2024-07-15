import { FullBtn } from '@components/commons/FullButton';
import { funnelComponentPropType } from '@pages/seniorProfile/types';

const Init = ({ setStep }: funnelComponentPropType) => {
  return <FullBtn text="다음으로" onClick={() => setStep && setStep((prev) => prev + 1)} isActive={true} />;
};

export default Init;
