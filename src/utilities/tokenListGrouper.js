import { BigNumber } from "ethers";
import Web3 from "web3"; //Comment for testing

const tokenListGrouper = (tokenList) => {
  const result = tokenList.reduce((allTokenGroups, token) => {
    let currGroup = allTokenGroups[token.contractAddress] ?? {
      contractAddress: token.contractAddress,
      tokenName: token.tokenName,
      tokenSymbol: token.tokenSymbol,
      count: 0,
      totalValue: BigNumber.from(0),
    };
    currGroup.count++;
    let value = token.value;
    currGroup.totalValue = currGroup.totalValue.add(BigNumber.from(value));
    return {
      ...allTokenGroups,
      [token.contractAddress]: currGroup,
    };
  }, {});

  return Object.values(result);
};

const sortTokenListGroupByTotalValue = (tokenListGroups, desc) => {
  let result = tokenListGroups.sort((a, b) => a.totalValue.sub(b.totalValue));
  if (desc) {
    result.reverse();
  }
  return result;
};

const sortTokenListGroupByCount = (tokenListGroups, desc) => {
  let result = tokenListGroups.sort((a, b) => a.count - b.count);
  if (desc) {
    result.reverse();
  }
  return result;
};

// UNcomment for testing
// let tokenList = [
//   { contractAddress: "qqqq1", value: 2 },
//   { contractAddress: "qqqq7", value: 1 },
//   { contractAddress: "qqqq3", value: 8 },
//   { contractAddress: "qqqq0", value: 77 },
//   { contractAddress: "qqqq7", value: 2 },
//   { contractAddress: "qqqq7", value: 1 },
//   { contractAddress: "qqqq3", value: 6 },
//   { contractAddress: "qqqq0", value: 0 },
// ];

// let result = tokenListGrouper(tokenList);

// console.log(result);

// sortTokenListGroupByTotalValue(result);
// console.log(result);

// sortTokenListGroupByCount(result);
// console.log(result);

// 250000000000000000000B

export {
  tokenListGrouper,
  sortTokenListGroupByCount,
  sortTokenListGroupByTotalValue,
};
