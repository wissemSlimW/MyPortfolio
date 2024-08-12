export const fadeX = ({
  delay = 0.5,
  distance = 100,
}: {
  delay: number;
  distance: number;
}) => {
  return {
    initial: {
      opacity: 0,
      x: distance,
    },
    whileInView: {
      opacity: 1,
      x: 0,
    },
    transition: {
      duration: 1,
      delay: delay,
    },
  };
};
export const fadeY = ({
  delay = 0.5,
  distance = 100,
}: {
  delay?: number;
  distance?: number;
}) => {
  return {
    initial: {
      opacity: 0,
      y: distance,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 1,
      delay: delay,
    },
  };
};
export const scale = ({
  delay = 0.2,
  size = 1,
}: {
  delay?: number;
  size?: number;
}) => {
  return {
    initial: {
      opacity: 0,
      scale: size,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
    },
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
      delay: delay,
    },
  };
};
