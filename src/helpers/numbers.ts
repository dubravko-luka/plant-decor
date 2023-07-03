export const formatNumberLess = (number: number | string) => {
  if (Number(number) >= 10) return number;
  return `0${number}`;
}