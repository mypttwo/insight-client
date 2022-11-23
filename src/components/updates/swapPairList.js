import React from "react";
import Masonry from "react-masonry-css";
import { getSwapGroupsByCurrency } from "utilities/messageProcessing/swapGroupsByCurr";
import SwapPair from "./swapPair";

const SwapPairList = (props) => {
  const { messages, swapGroupList } = props;

  let swapGroupsByCurr = getSwapGroupsByCurrency(swapGroupList);

  let col1Count = 0;
  let col2Count = 0;
  // let col3Count = 0;

  const getColWithLeastCount = () => {
    if (col1Count <= col2Count /*&& col1Count <= col3Count*/) {
      return 1;
    }
    if (col2Count <= col1Count /*&& col2Count <= col3Count*/) {
      return 2;
    }
    // if (col3Count <= col2Count && col3Count <= col1Count) {
    //   return 3;
    // }
  };

  const getNumberOfEntries = (swapGroup) => {
    let count = 0;
    for (let x = 0; x < swapGroup.boughtList.length; x++) {
      count += swapGroup.boughtList[x].msgList.length;
    }
    for (let x = 0; x < swapGroup.soldList.length; x++) {
      count += swapGroup.soldList[x].msgList.length;
    }
    return count;
  };

  let swapGroupArray = [];

  let headerPaddingCount = 2;

  for (let i = 0; i < swapGroupsByCurr.length; i++) {
    let count = getNumberOfEntries(swapGroupsByCurr[i]);
    let colWithLeastCount = getColWithLeastCount();
    if (colWithLeastCount == 1) {
      col1Count += count + headerPaddingCount;
      swapGroupArray.push(swapGroupsByCurr[i]);
      swapGroupArray.push(null);
      // swapGroupArray.push(null);
      continue;
    }
    if (colWithLeastCount == 2) {
      col2Count += count + headerPaddingCount;
      swapGroupArray.push(null);
      swapGroupArray.push(swapGroupsByCurr[i]);
      // swapGroupArray.push(null);
      continue;
    }
    // if (colWithLeastCount == 3) {
    //   col3Count += count + headerPaddingCount;
    //   swapGroupArray.push(null);
    //   swapGroupArray.push(null);
    //   swapGroupArray.push(swapGroupsByCurr[i]);
    //   continue;
    // }
  }
  console.log("swapGroupArray", swapGroupArray);
  return (
    <Masonry
      breakpointCols={2}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {swapGroupArray.map((swapGroup, index) =>
        swapGroup ? (
          <SwapPair key={index} swapGroup={swapGroup}></SwapPair>
        ) : (
          <></>
        )
      )}
    </Masonry>
  );
};

export default SwapPairList;
