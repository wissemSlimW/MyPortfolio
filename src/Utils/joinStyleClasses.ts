export const joinStyleClasses = (...list: (string | undefined)[]) =>
  list.filter((l) => !!l).join(" ");
