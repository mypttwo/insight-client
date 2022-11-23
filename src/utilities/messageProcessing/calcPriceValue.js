const { default: isStableCoin } = require("utilities/isStableCoin");

const calcPriceValue = (messages, ethPrice) => {
  return messages.map((msg) => {
    // let currs = msg.swap.split("#");
    // msg.swapCurr = currs[1];
    // msg.swapForCurr = currs[2];
    let calcValue = 0.0;
    if (msg.swapCurr.replace("#", "").localeCompare("ETH") == 0) {
      calcValue = parseFloat(msg.swapQty) * ethPrice;
    }
    if (msg.swapForCurr.replace("#", "").localeCompare("ETH") == 0) {
      calcValue = parseFloat(msg.swapForQty) * ethPrice;
    }
    if (isStableCoin(msg.swapCurr.replace("#", ""))) {
      calcValue = msg.swapQty;
      //   console.log("USD msg swapQty", msg.swapQty);
      //   console.log("calcValue", calcValue);
    }
    if (isStableCoin(msg.swapForCurr.replace("#", ""))) {
      calcValue = msg.swapForQty;
      //   console.log("USD msg swapForQty", msg.swapForQty);
      //   console.log("calcValue", calcValue);
    }
    if (calcValue == 0.0) {
      console.log("ethPrice", ethPrice);
      console.log("msg swapQty", parseFloat(msg.swapQty));
      console.log("msg swapForQty", parseFloat(msg.swapForQty));
    }
    return { ...msg, calcValue };
  });
};

export default calcPriceValue;
