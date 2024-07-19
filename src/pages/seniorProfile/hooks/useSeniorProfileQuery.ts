import { useMutation } from "@tanstack/react-query";
import { seniorProfileAPIType } from '@pages/seniorProfile/types';
import { seniorProfileAxios } from "@pages/seniorProfile/apis/seniorProfileAxios";
import { useNavigate } from "react-router-dom";

const useSeniorProfileHook = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: ({ catchphrase, career, award, story, preferredTimeList }: seniorProfileAPIType) => seniorProfileAxios({ catchphrase, career, award, story, preferredTimeList }),
    onError: (error) => {
      console.log('seniorProfile fetch Error: ', error);
      navigate('/error');
    }
  });

  return mutation;
}

export default useSeniorProfileHook;