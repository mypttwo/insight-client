"use strict";

import isStableCoin from "utilities/isStableCoin";

const getSwapGroupsByCurrency = (swapGroups) => {
  console.time("getSwapGroupsByCurrency");
  const result = swapGroups.reduce((allSwapGroupsByCurrency, swapGroup) => {
    let sold = true;
    let curr = swapGroup.swapCurr;
    if (
      curr.localeCompare("ETH") == 0 ||
      isStableCoin(curr)
      // curr.localeCompare("DAI") == 0 ||
      // curr.localeCompare("USDC") == 0 ||
      // curr.localeCompare("USDT") == 0
    ) {
      curr = swapGroup.swapForCurr;
      sold = false;
    }
    let currGroup = allSwapGroupsByCurrency[curr] ?? {
      curr: curr,
      boughtList: [],
      soldList: [],
    };
    if (sold) {
      currGroup.soldList.push(swapGroup);
    } else {
      currGroup.boughtList.push(swapGroup);
    }

    return { ...allSwapGroupsByCurrency, [curr]: currGroup };
  }, {});

  let list = Object.values(result);
  console.timeEnd("getSwapGroupsByCurrency");
  return list;
};

export { getSwapGroupsByCurrency };
