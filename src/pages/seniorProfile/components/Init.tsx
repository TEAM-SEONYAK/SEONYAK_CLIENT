import { FullBtn } from '@components/commons/FullButton';

// eslint-disable-next-line no-undef
const Init = ({ setStep }: { setStep: React.Dispatch<React.SetStateAction<number>> }) => {
  return <FullBtn text="다음으로" onClick={() => setStep && setStep((prev) => prev + 1)} isActive={true} />;
};

export default Init;
