/**
 * @param value string value of the currency
 * @returns decimal number
 */
const convertCurrency = (value: string) => {
  const decimal = (value as any) * 1;
  return decimal.toFixed(8);
};
export default convertCurrency;
