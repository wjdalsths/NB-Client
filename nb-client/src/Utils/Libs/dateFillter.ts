export const dateFillter = (d: string) => {
  const date = d;
  return date.substring(0, date.indexOf("T"));
};
