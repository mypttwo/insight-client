//https://stackabuse.com/how-to-format-number-as-currency-string-in-javascript/
const formatInUSD = (num) => {
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return dollarUS.format(num);
};

export default formatInUSD;
