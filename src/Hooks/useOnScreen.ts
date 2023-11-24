import { useEffect, useMemo, useState } from "react";

export const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false);
  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      }),
    []
  );
  useEffect(() => {
    observer.observe(ref!.current as Element);
    return () => observer.disconnect();
  }, [ref, observer]);

  return isOnScreen;
};
