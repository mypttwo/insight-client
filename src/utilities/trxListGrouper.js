import Web3 from "web3"; //Comment for testing

const trxListGrouper = (trxList, direction) => {
  const result = trxList.reduce((allTrxGroups, trx) => {
    let currGroup = allTrxGroups[trx[direction]] ?? {
      address: trx[direction],
      count: 0,
      totalValue: 0,
    };
    currGroup.count++;
    let ethValue = Web3.utils.fromWei(trx.value, "ether"); // Comment for testing
    // let ethValue = trx.value; // UNcomment for testing
    currGroup.totalValue = currGroup.totalValue + +ethValue;
    return {
      ...allTrxGroups,
      [trx[direction]]: currGroup,
    };
  }, {});

  return Object.values(result);
};

const sortTrxListGroupByTotalValue = (trxListGroups, desc) => {
  let result = trxListGroups.sort((a, b) => {
    console.log("compare", a.totalValue, b.totalValue);
    return a.totalValue - b.totalValue;
  });
  if (desc) {
    result.reverse();
  }
  return result;
};

const sortTrxListGroupByCount = (trxListGroups, desc) => {
  let result = trxListGroups.sort((a, b) => a.count - b.count);
  if (desc) {
    result.reverse();
  }
  return result;
};

// UNcomment for testing
// let trxList = [
//   { from: "qqqq1", value: 2 },
//   { from: "qqqq7", value: 1 },
//   { from: "qqqq3", value: 8 },
//   { from: "qqqq0", value: 77 },
//   { from: "qqqq7", value: 2 },
//   { from: "qqqq7", value: 1 },
//   { from: "qqqq3", value: 6 },
//   { from: "qqqq0", value: 0 },
// ];

// let result = trxListGrouper(trxList, "from");

// console.log(result);

// sortTrxListGroupByTotalValue(result);
// console.log(result);

// sortTrxListGroupByCount(result);
// console.log(result);

export {
  trxListGrouper,
  sortTrxListGroupByCount,
  sortTrxListGroupByTotalValue,
};
