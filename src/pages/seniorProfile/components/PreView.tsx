import { FullBtn } from '@components/commons/FullButton';
import { funnelComponentPropType } from '@pages/seniorProfile/types';

interface preViewPropType extends funnelComponentPropType {
  variant?: 'default' | 'secondary';
}
const PreView = ({ variant = 'default', profile, setStep }: preViewPropType) => {
  return <FullBtn text="다음으로" onClick={() => setStep && setStep((prev) => prev + 1)} isActive={true} />;
};

export default PreView;
