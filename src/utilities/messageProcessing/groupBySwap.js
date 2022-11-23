"use strict";

import getNumericalValue from "utilities/getNumericalValue";

const groupBySwap = (messages) => {
  messages.map((msg) => (msg.swap = `${msg.swapCurr}${msg.swapForCurr}`));

  const result = messages.reduce((allmsgGroups, msg) => {
    let currGroup = allmsgGroups[msg.swap] ?? {
      swap: msg.swap,
      count: 0,
      totalValue: 0,
      swapQty: 0,
      swapForQty: 0,
      msgList: [],
    };
    currGroup.count++;
    currGroup.totalValue =
      currGroup.totalValue + getNumericalValue(msg.calcValue);

    currGroup.swapQty = currGroup.swapQty + getNumericalValue(msg.swapQty);
    currGroup.swapForQty =
      currGroup.swapForQty + getNumericalValue(msg.swapForQty);
    currGroup.msgList.push(msg);
    return { ...allmsgGroups, [msg.swap]: currGroup };
  }, {});

  //Setting currency strings
  let list = Object.values(result);
  list.forEach((entry) => {
    let currs = entry.swap.split("#");
    entry.swapCurr = currs[1];
    entry.swapForCurr = currs[2];
  });

  return list.sort((e1, e2) => e2.totalValue - e1.totalValue);
};

export { groupBySwap };

// Test

// let messages = [
// {
//   trxType: 0,
//   swapQty: "79.54",
//   swapCurr: "#ETH",
//   swapValue: "101354.05",
//   increase: "+0.17%",
//   swapForQty: "2,738,981.35",
//   swapForCurr: "#MATIC",
//   swapForRate: "$0.73",
//   uniswapVersion: "v3",
//   scPrefix: "#0x0000...",
//   etherscanUrl:
//     "https://etherscan.io/tx/0x3962a62de160ec12f4b471a31d8b1421b1f84c4a16bc5a532dafccb40b8d9610",
//   txHash:
//     "0x3962a62de160ec12f4b471a31d8b1421b1f84c4a16bc5a532dafccb40b8d9610",
//   timeStamp: 1664468079108,
//   innerText:
//     "Swap 79.54 #ETH ($101,354.05 +0.17%) For 139,421.01 #MATIC @ $0.73\n🦄 #v3 Etherscan #0x0000...",
// },
// {
//   trxType: 0,
//   swapQty: "79.54",
//   swapCurr: "#ET",
//   swapValue: "101354.05",
//   increase: "+0.17%",
//   swapForQty: "2,738,981.35",
//   swapForCurr: "#MATIC",
//   swapForRate: "$0.73",
//   uniswapVersion: "v3",
//   scPrefix: "#0x0000...",
//   etherscanUrl:
//     "https://etherscan.io/tx/0x3962a62de160ec12f4b471a31d8b1421b1f84c4a16bc5a532dafccb40b8d9610",
//   txHash:
//     "0x3962a62de160ec12f4b471a31d8b1421b1f84c4a16bc5a532dafccb40b8d9610",
//   timeStamp: 1664468079108,
//   innerText:
//     "Swap 79.54 #ETH ($101,354.05 +0.17%) For 139,421.01 #MATIC @ $0.73\n🦄 #v3 Etherscan #0x0000...",
// },
// {
//   trxType: 0,
//   swapQty: "79.54",
//   swapCurr: "#ETH",
//   swapValue: "101354.05",
//   increase: "+0.17%",
//   swapForQty: "2,738,981.35",
//   swapForCurr: "#MATI",
//   swapForRate: "$0.73",
//   uniswapVersion: "v3",
//   scPrefix: "#0x0000...",
//   etherscanUrl:
//     "https://etherscan.io/tx/0x3962a62de160ec12f4b471a31d8b1421b1f84c4a16bc5a532dafccb40b8d9610",
//   txHash:
//     "0x3962a62de160ec12f4b471a31d8b1421b1f84c4a16bc5a532dafccb40b8d9610",
//   timeStamp: 1664468079108,
//   innerText:
//     "Swap 79.54 #ETH ($101,354.05 +0.17%) For 139,421.01 #MATIC @ $0.73\n🦄 #v3 Etherscan #0x0000...",
// },
// {
//   trxType: 0,
//   swapQty: "79.54",
//   swapCurr: "#ETH",
//   swapValue: "101354.05",
//   increase: "+0.17%",
//   swapForQty: "2,738,981.35",
//   swapForCurr: "#MATIC",
//   swapForRate: "$0.73",
//   uniswapVersion: "v3",
//   scPrefix: "#0x0000...",
//   etherscanUrl:
//     "https://etherscan.io/tx/0x3962a62de160ec12f4b471a31d8b1421b1f84c4a16bc5a532dafccb40b8d9610",
//   txHash:
//     "0x3962a62de160ec12f4b471a31d8b1421b1f84c4a16bc5a532dafccb40b8d9610",
//   timeStamp: 1664468079108,
//   innerText:
//     "Swap 79.54 #ETH ($101,354.05 +0.17%) For 139,421.01 #MATIC @ $0.73\n🦄 #v3 Etherscan #0x0000...",
// },
//   {
//     trxType: 1,
//     swapQty: "43,027.21",
//     swapCurr: "#CWEB",
//     swapValue: "$3,208,598,679.87",
//     increase: "+0.89%",
//     swapForQty: "1,213.58",
//     swapForCurr: "#USDT",
//     swapForRate: "$74,571.38",
//     uniswapVersion: "v2",
//     scPrefix: "#whale",
//     etherscanUrl:
//       "https://etherscan.io/tx/0x1f013e2506223908ca02f2598df29ce2d74fd9a5271802f6ab48a5e6a36b7533",
//     txHash:
//       "0x1f013e2506223908ca02f2598df29ce2d74fd9a5271802f6ab48a5e6a36b7533",
//     timeStamp: 1664625880902,
//     innerText:
//       "🐻 🚨🚨🚨🚨🚨Swap 43,027.21 #CWEB ($3,208,598,679.87 +0.89%) For 1,213.58 #USDT @ $74,571.38\n#v2 Etherscan #0xeFDc... #whale",
//     swap: "#CWEB#USDT",
//   },
// ];

// let result = groupBySwap(messages);
// console.log(result);

/*

//Output 
[
  {
    swap: '#ETH#MATIC',
    count: 2,
    totalValue: 202708.1,
    swapQty: 159.08,
    swapForQty: NaN
  },
  {
    swap: '#ET#MATIC',
    count: 1,
    totalValue: 101354.05,
    swapQty: 79.54,
    swapForQty: NaN
  },
  {
    swap: '#ETH#MATI',
    count: 1,
    totalValue: 101354.05,
    swapQty: 79.54,
    swapForQty: NaN
  }
]
*/
