import React from "react";
import formatInUSD from "utilities/formatInUSD";
import getNumericalValue from "utilities/getNumericalValue";

const SwapPairListEntry = (props) => {
  const { msg } = props;
  let calcValue = getNumericalValue(msg.calcValue);

  return (
    <div className="d-flex justify-content-between">
      <a href={msg.etherscanUrl} target="_blank">
        {msg.swapQty}
        {msg.swapCurr.replace("#", " ")} For {msg.swapForQty}
        {msg.swapForCurr.replace("#", " ")}{" "}
      </a>
      <span>{calcValue > 0 ? ` ${formatInUSD(calcValue)}` : ""}</span>
    </div>
  );
};

export default SwapPairListEntry;
