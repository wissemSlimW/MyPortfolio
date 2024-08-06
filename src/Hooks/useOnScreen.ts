import { useState } from "react";
import { useInView, } from "react-intersection-observer";

export const useOnScreen = () => {
  const [onScreen, setOnScreen] = useState<boolean>(false);

  const { ref } = useInView({
    onChange: (visible) => setOnScreen(visible),

  });

  return { onScreen, ref };
};
