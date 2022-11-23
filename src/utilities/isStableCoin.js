const isStableCoin = (curr) => {
  if (
    curr.localeCompare("DAI") == 0 ||
    curr.localeCompare("USDC") == 0 ||
    curr.localeCompare("USDD") == 0 ||
    curr.localeCompare("USDT") == 0
  ) {
    return true;
  }
  return false;
};

export default isStableCoin;
