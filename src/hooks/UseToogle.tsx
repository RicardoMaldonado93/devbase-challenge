import { useCallback, useState } from "react";

export const UseToogle = () => {
  const [toogle, setToogle] = useState<boolean>(false);

  const onToogle = useCallback(() => {
    setToogle((toogle) => !toogle);
  }, []);

  return {
    toogle,
    onToogle,
  };
};
