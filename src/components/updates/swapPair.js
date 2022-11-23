import React from "react";
import SwapPairListEntry from "./swapPairListEntry";

const SwapPair = (props) => {
  const { swapGroup } = props;

  return (
    <div className="card mb-3" style={{ backgroundColor: "#004040" }}>
      <h3 className="card-header ">{swapGroup.curr}</h3>

      {swapGroup.boughtList.map((entry, bIndex) => (
        <div key={bIndex}>
          <div className="card-body">
            <p className="card-text">Buy Swaps with {entry.swapCurr}</p>
          </div>
          <ul className="list-group list-group-flush">
            {entry.msgList.map((msg, msgIndex) => (
              <li className="list-group-item small" key={msgIndex}>
                <SwapPairListEntry msg={msg}></SwapPairListEntry>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {swapGroup.soldList.map((entry, sIndex) => (
        <div key={sIndex}>
          <div className="card-body">
            <p className="card-text">Sell Swaps for {entry.swapForCurr}</p>
          </div>
          <ul className="list-group list-group-flush">
            {entry.msgList.map((msg, index) => (
              <li className="list-group-item small" key={index}>
                <SwapPairListEntry msg={msg}></SwapPairListEntry>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* <div className="card-footer text-muted"></div> */}
    </div>
  );
};

export default SwapPair;
