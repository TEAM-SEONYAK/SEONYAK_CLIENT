import { RefreshImgIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';

const Init = ({ setStep }: { setStep: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <>
      <RefreshImgIc />
      <FullBtn text="다음으로" onClick={() => setStep && setStep((prev) => prev + 1)} isActive={true} />;
    </>
  );
};

export default Init;
