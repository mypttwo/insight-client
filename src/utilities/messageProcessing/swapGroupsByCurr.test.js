//TEST

const { getSwapGroupsByCurrency } = require("./swapGroupsByCurr");

let swapGroups = [
  {
    swap: "#WBTC#USDC",
    count: 5,
    totalValue: 10016416.01,
    swapQty: 511.77,
    swapForQty: 9990398.67,
    msgList: [
      {
        trxType: 1,
        swapQty: "179.64",
        swapCurr: "#WBTC",
        swapValue: "$3,522,196.97",
        increase: "+0.24%",
        swapForQty: "3,513,660.78",
        swapForCurr: "#USDC",
        swapForRate: "$19,606.91",
        uniswapVersion: "v3",
        scPrefix: "#whale",
        etherscanUrl:
          "https://etherscan.io/tx/0x13da6e6f6b6835a2cfb4317f74bfb1bd03147acf32c42f342e2187b9f4ee2c42",
        txHash:
          "0x13da6e6f6b6835a2cfb4317f74bfb1bd03147acf32c42f342e2187b9f4ee2c42",
        timeStamp: 1664625880719,
        innerText:
          "🐻 🚨🚨🚨🚨Swap 179.64 #WBTC ($3,522,196.97 +0.24%) For 3,513,660.78 #USDC @ $19,606.91\n🦄 #v3 Etherscan #0x57c1... #whale",
        swap: "#WBTC#USDC",
      },
      {
        trxType: 1,
        swapQty: "52.33",
        swapCurr: "#WBTC",
        swapValue: "$1,025,499.85",
        increase: "+0.29%",
        swapForQty: "1,022,580.57",
        swapForCurr: "#USDC",
        swapForRate: "$19,598.44",
        uniswapVersion: "v3",
        scPrefix: "#fish",
        etherscanUrl:
          "https://etherscan.io/tx/0xb576b630721397ef69228393bb828154d80b9c126698fb87bafbc8e9e28cad37",
        txHash:
          "0xb576b630721397ef69228393bb828154d80b9c126698fb87bafbc8e9e28cad37",
        timeStamp: 1664625880720,
        innerText:
          "🐻 🚨🚨Swap 52.33 #WBTC ($1,025,499.85 +0.29%) For 1,022,580.57 #USDC @ $19,598.44\n🦄 #v3 Etherscan #0x9507... #fish",
        swap: "#WBTC#USDC",
      },
      {
        trxType: 1,
        swapQty: "52.65",
        swapCurr: "#WBTC",
        swapValue: "$1,028,389.30",
        increase: "+0.27%",
        swapForQty: "1,025,590.32",
        swapForCurr: "#USDC",
        swapForRate: "$19,533.18",
        uniswapVersion: "v3",
        scPrefix: "#fish",
        etherscanUrl:
          "https://etherscan.io/tx/0x2faa7b2daf8ee5f51de0d4cfdc21b8f7ab035775a76e3495b4dff9199b681fa7",
        txHash:
          "0x2faa7b2daf8ee5f51de0d4cfdc21b8f7ab035775a76e3495b4dff9199b681fa7",
        timeStamp: 1664625880720,
        innerText:
          "🐻 🚨🚨Swap 52.65 #WBTC ($1,028,389.30 +0.27%) For 1,025,590.32 #USDC @ $19,533.18\n🦄 #v3 Etherscan #0xa69b... #fish",
        swap: "#WBTC#USDC",
      },
      {
        trxType: 1,
        swapQty: "86.63",
        swapCurr: "#WBTC",
        swapValue: "$1,694,238.98",
        increase: "+0.28%",
        swapForQty: "1,689,585.65",
        swapForCurr: "#USDC",
        swapForRate: "$19,557.90",
        uniswapVersion: "v3",
        scPrefix: "#dolphin",
        etherscanUrl:
          "https://etherscan.io/tx/0x151d5feb3768cbde15d85d106f13aa3a289ab818f360404d1f39acf1e9ea4d97",
        txHash:
          "0x151d5feb3768cbde15d85d106f13aa3a289ab818f360404d1f39acf1e9ea4d97",
        timeStamp: 1664625978378,
        innerText:
          "🐻 🚨🚨🚨Swap 86.63 #WBTC ($1,694,238.98 +0.28%) For 1,689,585.65 #USDC @ $19,557.90\n🦄 #v3 Etherscan #0x57c1... #dolphin",
        swap: "#WBTC#USDC",
      },
      {
        trxType: 1,
        swapQty: "140.52",
        swapCurr: "#WBTC",
        swapValue: "$2,746,090.91",
        increase: "+0.26%",
        swapForQty: "2,738,981.35",
        swapForCurr: "#USDC",
        swapForRate: "$19,541.78",
        uniswapVersion: "v3",
        scPrefix: "#whale",
        etherscanUrl:
          "https://etherscan.io/tx/0x905d5c93c3a96ca417979e90b1661e6921bb49a0f452a04ce9e1210be0196e87",
        txHash:
          "0x905d5c93c3a96ca417979e90b1661e6921bb49a0f452a04ce9e1210be0196e87",
        timeStamp: 1664625978379,
        innerText:
          "🐻 🚨🚨🚨🚨Swap 140.52 #WBTC ($2,746,090.91 +0.26%) For 2,738,981.35 #USDC @ $19,541.78\n🦄 #v3 Etherscan #0x57c1... #whale",
        swap: "#WBTC#USDC",
      },
    ],
    swapCurr: "WBTC",
    swapForCurr: "USDC",
  },
  {
    swap: "#ETH#cbETH",
    count: 6,
    totalValue: 829022.99,
    swapQty: 617.64,
    swapForQty: 634.33,
    msgList: [
      {
        trxType: 0,
        swapQty: "100.00",
        swapCurr: "#ETH",
        swapValue: "$133,190.00",
        increase: "+0.05%",
        swapForQty: "102.37",
        swapForCurr: "#cbETH",
        swapForRate: "$1,300.41",
        uniswapVersion: "v3",
        scPrefix: "#0x18c6...",
        etherscanUrl:
          "https://etherscan.io/tx/0xd6232481dd7eaa3dee78820c34ca4cbd8244850b7760699df88b5acfc61f36cf",
        txHash:
          "0xd6232481dd7eaa3dee78820c34ca4cbd8244850b7760699df88b5acfc61f36cf",
        timeStamp: 1664625880900,
        innerText:
          "Swap 100.00 #ETH ($133,190.00 +0.05%) For 102.37 #cbETH @ $1,300.41\n🦄 #v3 Etherscan #0x18c6...",
        swap: "#ETH#cbETH",
      },
      {
        trxType: 0,
        swapQty: "108.66",
        swapCurr: "#ETH",
        swapValue: "$146,204.51",
        increase: "+0.00%",
        swapForQty: "112.09",
        swapForCurr: "#cbETH",
        swapForRate: "$1,304.33",
        uniswapVersion: "v3",
        scPrefix: "#0x1111...",
        etherscanUrl:
          "https://etherscan.io/tx/0x8208cfe3f97d57e78534bfad325dc32a59839af995c6bd1e9b31b6d055952973",
        txHash:
          "0x8208cfe3f97d57e78534bfad325dc32a59839af995c6bd1e9b31b6d055952973",
        timeStamp: 1664625978378,
        innerText:
          "Swap 108.66 #ETH ($146,204.51 +0.00%) For 112.09 #cbETH @ $1,304.33\n🦄 #v3 Etherscan #0x1111...",
        swap: "#ETH#cbETH",
      },
      {
        trxType: 0,
        swapQty: "108.65",
        swapCurr: "#ETH",
        swapValue: "$143,758.69",
        increase: "+0.01%",
        swapForQty: "112.00",
        swapForCurr: "#cbETH",
        swapForRate: "$1,283.78",
        uniswapVersion: "v3",
        scPrefix: "#0x1111...",
        etherscanUrl:
          "https://etherscan.io/tx/0x69e1d3d35d6a27d1b75cef4fdd1d6fe4c6f23c8e861690c4d8d0a1c23cca901a",
        txHash:
          "0x69e1d3d35d6a27d1b75cef4fdd1d6fe4c6f23c8e861690c4d8d0a1c23cca901a",
        timeStamp: 1664625978379,
        innerText:
          "Swap 108.65 #ETH ($143,758.69 +0.01%) For 112.00 #cbETH @ $1,283.78\n🦄 #v3 Etherscan #0x1111...",
        swap: "#ETH#cbETH",
      },
      {
        trxType: 0,
        swapQty: "100.00",
        swapCurr: "#ETH",
        swapValue: "$135,415.00",
        increase: "+0.01%",
        swapForQty: "102.93",
        swapForCurr: "#cbETH",
        swapForRate: "$1,315.78",
        uniswapVersion: "v3",
        scPrefix: "#0xf2f4...",
        etherscanUrl:
          "https://etherscan.io/tx/0x84065a9534723b4e5c2efdaac61e60cbaf13ce149be1605a546209db94d2d9f3",
        txHash:
          "0x84065a9534723b4e5c2efdaac61e60cbaf13ce149be1605a546209db94d2d9f3",
        timeStamp: 1664625978387,
        innerText:
          "Swap 100.00 #ETH ($135,415.00 +0.01%) For 102.93 #cbETH @ $1,315.78\n🦄 #v3 Etherscan #0xf2f4...",
        swap: "#ETH#cbETH",
      },
      {
        trxType: 0,
        swapQty: "76.06",
        swapCurr: "#ETH",
        swapValue: "$102,750.12",
        increase: "+0.02%",
        swapForQty: "77.93",
        swapForCurr: "#cbETH",
        swapForRate: "$1,318.72",
        uniswapVersion: "v3",
        scPrefix: "#0x1111...",
        etherscanUrl:
          "https://etherscan.io/tx/0x8afe31a18250cf18e59619e45344b31515698fab9e2f44464c467034067ec760",
        txHash:
          "0x8afe31a18250cf18e59619e45344b31515698fab9e2f44464c467034067ec760",
        timeStamp: 1664625978387,
        innerText:
          "Swap 76.06 #ETH ($102,750.12 +0.02%) For 77.93 #cbETH @ $1,318.72\n🦄 #v3 Etherscan #0x1111...",
        swap: "#ETH#cbETH",
      },
      {
        trxType: 0,
        swapQty: "124.27",
        swapCurr: "#ETH",
        swapValue: "$167,704.67",
        increase: "+0.01%",
        swapForQty: "127.01",
        swapForCurr: "#cbETH",
        swapForRate: "$1,320.31",
        uniswapVersion: "v3",
        scPrefix: "#0x1111...",
        etherscanUrl:
          "https://etherscan.io/tx/0xcd92312d037a2a3d6a83e6da593757593641e9e733421084d5ff8ab81c9132bb",
        txHash:
          "0xcd92312d037a2a3d6a83e6da593757593641e9e733421084d5ff8ab81c9132bb",
        timeStamp: 1664625978387,
        innerText:
          "Swap 124.27 #ETH ($167,704.67 +0.01%) For 127.01 #cbETH @ $1,320.31\n🦄 #v3 Etherscan #0x1111...",
        swap: "#ETH#cbETH",
      },
    ],
    swapCurr: "ETH",
    swapForCurr: "cbETH",
  },
  {
    swap: "#cbETH#ETH",
    count: 5,
    totalValue: 651711.39,
    swapQty: 500,
    swapForQty: 488.47999999999996,
    msgList: [
      {
        trxType: 1,
        swapQty: "100.00",
        swapCurr: "#cbETH",
        swapValue: "$130,976.72",
        increase: "+0.02%",
        swapForQty: "97.82",
        swapForCurr: "#ETH",
        swapForRate: "$1,309.77",
        uniswapVersion: "v3",
        scPrefix: "#0xdef1...",
        etherscanUrl:
          "https://etherscan.io/tx/0x850af3bec2056109eca8663dd4d8792204af2bcca126a63c44295e2b7e2ea783",
        txHash:
          "0x850af3bec2056109eca8663dd4d8792204af2bcca126a63c44295e2b7e2ea783",
        timeStamp: 1664625880721,
        innerText:
          "🐻 Swap 100.00 #cbETH ($130,976.72 +0.02%) For 97.82 #ETH @ $1,309.77\n🦄 #v3 Etherscan #0xdef1...",
        swap: "#cbETH#ETH",
      },
      {
        trxType: 1,
        swapQty: "100.00",
        swapCurr: "#cbETH",
        swapValue: "$130,358.62",
        increase: "+0.02%",
        swapForQty: "97.76",
        swapForCurr: "#ETH",
        swapForRate: "$1,303.59",
        uniswapVersion: "v3",
        scPrefix: "#0xdef1...",
        etherscanUrl:
          "https://etherscan.io/tx/0x749fb784bfe9bdd5af3a02549dde51277d5e9084d5cb3cc37c3334371e64ce9a",
        txHash:
          "0x749fb784bfe9bdd5af3a02549dde51277d5e9084d5cb3cc37c3334371e64ce9a",
        timeStamp: 1664625880895,
        innerText:
          "🐻 Swap 100.00 #cbETH ($130,358.62 +0.02%) For 97.76 #ETH @ $1,303.59\n🦄 #v3 Etherscan #0xdef1...",
        swap: "#cbETH#ETH",
      },
      {
        trxType: 1,
        swapQty: "100.00",
        swapCurr: "#cbETH",
        swapValue: "$130,278.31",
        increase: "+0.02%",
        swapForQty: "97.70",
        swapForCurr: "#ETH",
        swapForRate: "$1,302.78",
        uniswapVersion: "v3",
        scPrefix: "#0xdef1...",
        etherscanUrl:
          "https://etherscan.io/tx/0xaf2095743564c39f5040c7b17c8aacd4a49ed12d124c9f8eac22bdc461f3c7d0",
        txHash:
          "0xaf2095743564c39f5040c7b17c8aacd4a49ed12d124c9f8eac22bdc461f3c7d0",
        timeStamp: 1664625880895,
        innerText:
          "🐻 Swap 100.00 #cbETH ($130,278.31 +0.02%) For 97.70 #ETH @ $1,302.78\n🦄 #v3 Etherscan #0xdef1...",
        swap: "#cbETH#ETH",
      },
      {
        trxType: 1,
        swapQty: "100.00",
        swapCurr: "#cbETH",
        swapValue: "$130,196.20",
        increase: "+0.02%",
        swapForQty: "97.64",
        swapForCurr: "#ETH",
        swapForRate: "$1,301.96",
        uniswapVersion: "v3",
        scPrefix: "#0xdef1...",
        etherscanUrl:
          "https://etherscan.io/tx/0x595feb2e1214839d5290ed8476ddfdde67c7c74c500c66a67ae31506df5758b1",
        txHash:
          "0x595feb2e1214839d5290ed8476ddfdde67c7c74c500c66a67ae31506df5758b1",
        timeStamp: 1664625880896,
        innerText:
          "🐻 Swap 100.00 #cbETH ($130,196.20 +0.02%) For 97.64 #ETH @ $1,301.96\n🦄 #v3 Etherscan #0xdef1...",
        swap: "#cbETH#ETH",
      },
      {
        trxType: 1,
        swapQty: "100.00",
        swapCurr: "#cbETH",
        swapValue: "$129,901.54",
        increase: "+0.03%",
        swapForQty: "97.56",
        swapForCurr: "#ETH",
        swapForRate: "$1,299.02",
        uniswapVersion: "v3",
        scPrefix: "#0xdef1...",
        etherscanUrl:
          "https://etherscan.io/tx/0xf2751859d8fde6c3545ca785fac2efc46786123e661a0ed6e1add77dd5933040",
        txHash:
          "0xf2751859d8fde6c3545ca785fac2efc46786123e661a0ed6e1add77dd5933040",
        timeStamp: 1664625880899,
        innerText:
          "🐻 Swap 100.00 #cbETH ($129,901.54 +0.03%) For 97.56 #ETH @ $1,299.02\n🦄 #v3 Etherscan #0xdef1...",
        swap: "#cbETH#ETH",
      },
    ],
    swapCurr: "cbETH",
    swapForCurr: "ETH",
  },
  {
    swap: "#LINK#ETH",
    count: 2,
    totalValue: 375496.80000000005,
    swapQty: 48926.65,
    swapForQty: 282.11,
    msgList: [
      {
        trxType: 1,
        swapQty: "35,814.98",
        swapCurr: "#LINK",
        swapValue: "$275,025.14",
        increase: "+0.01%",
        swapForQty: "206.73",
        swapForCurr: "#ETH",
        swapForRate: "$7.68",
        uniswapVersion: "v3",
        scPrefix: "#0x5617...",
        etherscanUrl:
          "https://etherscan.io/tx/0x47691b87c9e09d6e5f15ac41f1a2042a1b175c4d268a71aa55fa99a60afbb920",
        txHash:
          "0x47691b87c9e09d6e5f15ac41f1a2042a1b175c4d268a71aa55fa99a60afbb920",
        timeStamp: 1664625880902,
        innerText:
          "🐻 Swap 35,814.98 #LINK ($275,025.14 +0.01%) For 206.73 #ETH @ $7.68\n🦄 #v3 Etherscan #0x5617...",
        swap: "#LINK#ETH",
      },
      {
        trxType: 1,
        swapQty: "13,111.67",
        swapCurr: "#LINK",
        swapValue: "$100,471.66",
        increase: "+0.19%",
        swapForQty: "75.38",
        swapForCurr: "#ETH",
        swapForRate: "$7.66",
        uniswapVersion: "v3",
        scPrefix: "#0x0000...",
        etherscanUrl:
          "https://etherscan.io/tx/0xceb16659df0a760774de4e91ad797a833aaf5debd640ca48f9666e8315125564",
        txHash:
          "0xceb16659df0a760774de4e91ad797a833aaf5debd640ca48f9666e8315125564",
        timeStamp: 1664625880902,
        innerText:
          "🐻 Swap 13,111.67 #LINK ($100,471.66 +0.19%) For 75.38 #ETH @ $7.66\n🦄 #v3 Etherscan #0x0000...",
        swap: "#LINK#ETH",
      },
    ],
    swapCurr: "LINK",
    swapForCurr: "ETH",
  },
  {
    swap: "#USDC#LINK",
    count: 1,
    totalValue: 290163.37,
    swapQty: 290163.37,
    swapForQty: 40587.84,
    msgList: [
      {
        trxType: 0,
        swapQty: "290,163.37",
        swapCurr: "#USDC",
        swapValue: "$290,163.37",
        increase: "+6.54%",
        swapForQty: "40,587.84",
        swapForCurr: "#LINK",
        swapForRate: "$7.63",
        uniswapVersion: "v3",
        scPrefix: "#0xf2f4...",
        etherscanUrl:
          "https://etherscan.io/tx/0x565f624c040b6bd9f310e1aa0d682ce1fa977e92196c1a3d671ee08d79bfa7c9",
        txHash:
          "0x565f624c040b6bd9f310e1aa0d682ce1fa977e92196c1a3d671ee08d79bfa7c9",
        timeStamp: 1664625880902,
        innerText:
          "Swap 290,163.37 #USDC ($290,163.37 +6.54%) For 40,587.84 #LINK @ $7.63\n🦄 #v3 Etherscan #0xf2f4...",
        swap: "#USDC#LINK",
      },
    ],
    swapCurr: "USDC",
    swapForCurr: "LINK",
  },
  {
    swap: "#ETH#LINK",
    count: 2,
    totalValue: 228929.63,
    swapQty: 172.19,
    swapForQty: 30000,
    msgList: [
      {
        trxType: 0,
        swapQty: "86.22",
        swapCurr: "#ETH",
        swapValue: "$114,531.80",
        increase: "+0.18%",
        swapForQty: "15,000.00",
        swapForCurr: "#LINK",
        swapForRate: "$7.62",
        uniswapVersion: "v3",
        scPrefix: "#0xba25...",
        etherscanUrl:
          "https://etherscan.io/tx/0x64a9f4506f2f238c808f6b35f6291d9b43a2c245a9ddb3e5c16910692f77ca8c",
        txHash:
          "0x64a9f4506f2f238c808f6b35f6291d9b43a2c245a9ddb3e5c16910692f77ca8c",
        timeStamp: 1664625880902,
        innerText:
          "Swap 86.22 #ETH ($114,531.80 +0.18%) For 15,000.00 #LINK @ $7.62\n🦄 #v3 Etherscan #0xba25...",
        swap: "#ETH#LINK",
      },
      {
        trxType: 0,
        swapQty: "85.97",
        swapCurr: "#ETH",
        swapValue: "$114,397.83",
        increase: "+0.24%",
        swapForQty: "15,000.00",
        swapForCurr: "#LINK",
        swapForRate: "$7.61",
        uniswapVersion: "v3",
        scPrefix: "#0xba25...",
        etherscanUrl:
          "https://etherscan.io/tx/0x6e0331a5c8e8535f6d9ef38a886f0cf070c94a41f03bee99bb3171ec3556610a",
        txHash:
          "0x6e0331a5c8e8535f6d9ef38a886f0cf070c94a41f03bee99bb3171ec3556610a",
        timeStamp: 1664625880970,
        innerText:
          "Swap 85.97 #ETH ($114,397.83 +0.24%) For 15,000.00 #LINK @ $7.61\n🦄 #v3 Etherscan #0xba25...",
        swap: "#ETH#LINK",
      },
    ],
    swapCurr: "ETH",
    swapForCurr: "LINK",
  },
  {
    swap: "#FXS#ETH",
    count: 1,
    totalValue: 207909.59,
    swapQty: 51177.08,
    swapForQty: 11.55,
    msgList: [
      {
        trxType: 1,
        swapQty: "51,177.08",
        swapCurr: "#FXS",
        swapValue: "$207,909.59",
        increase: "",
        swapForQty: "11.55",
        swapForCurr: "#ETH",
        swapForRate: "$4.08",
        uniswapVersion: "v2",
        scPrefix: "#0x6B9d...",
        etherscanUrl:
          "https://etherscan.io/tx/0x089bab796db1e9ec1fc1031ab1f5ac31278c5b45c5da84886bdce96200d1332b",
        txHash:
          "0x089bab796db1e9ec1fc1031ab1f5ac31278c5b45c5da84886bdce96200d1332b",
        timeStamp: 1664625880719,
        innerText:
          "🐻 Swap 51,177.08 #FXS ($207,909.59) For 11.55 #ETH @ $4.08\n#v2 Etherscan #0x6B9d...",
        swap: "#FXS#ETH",
      },
    ],
    swapCurr: "FXS",
    swapForCurr: "ETH",
  },
  {
    swap: "#CWEB#USDT",
    count: 1,
    totalValue: null,
    swapQty: 43027.21,
    swapForQty: 1213.58,
    msgList: [
      {
        trxType: 1,
        swapQty: "43,027.21",
        swapCurr: "#CWEB",
        swapValue: "$3,208,598,679.87",
        increase: "+0.89%",
        swapForQty: "1,213.58",
        swapForCurr: "#USDT",
        swapForRate: "$74,571.38",
        uniswapVersion: "v2",
        scPrefix: "#whale",
        etherscanUrl:
          "https://etherscan.io/tx/0x1f013e2506223908ca02f2598df29ce2d74fd9a5271802f6ab48a5e6a36b7533",
        txHash:
          "0x1f013e2506223908ca02f2598df29ce2d74fd9a5271802f6ab48a5e6a36b7533",
        timeStamp: 1664625880902,
        innerText:
          "🐻 🚨🚨🚨🚨🚨Swap 43,027.21 #CWEB ($3,208,598,679.87 +0.89%) For 1,213.58 #USDT @ $74,571.38\n#v2 Etherscan #0xeFDc... #whale",
        swap: "#CWEB#USDT",
      },
    ],
    swapCurr: "CWEB",
    swapForCurr: "USDT",
  },
  {
    swap: "#USDC#WBTC",
    count: 7,
    totalValue: 11686490,
    swapQty: 11686490,
    swapForQty: 595.78,
    msgList: [
      {
        trxType: 2,
        swapQty: "1,140,363.70",
        swapCurr: "#USDC",
        swapValue: "$1,140,363.70",
        increase: "+0.28%",
        swapForQty: "58.13",
        swapForCurr: "#WBTC",
        swapForRate: "$19,560.72",
        uniswapVersion: "v3",
        scPrefix: "#fish",
        etherscanUrl:
          "https://etherscan.io/tx/0xbf46865e4c78323402f0e9454133efacd2d7052f3c063f2c5753b092c760b853",
        txHash:
          "0xbf46865e4c78323402f0e9454133efacd2d7052f3c063f2c5753b092c760b853",
        timeStamp: 1664625978378,
        innerText:
          "🚨🚨Swap 1,140,363.70 #USDC ($1,140,363.70 +0.28%) For 58.13 #WBTC @ $19,560.72\n🦄 #v3 Etherscan #0x57c1... #fish",
        swap: "#USDC#WBTC",
      },
      {
        trxType: 2,
        swapQty: "2,019,807.00",
        swapCurr: "#USDC",
        swapValue: "$2,019,807.00",
        increase: "+0.27%",
        swapForQty: "103.16",
        swapForCurr: "#WBTC",
        swapForRate: "$19,525.99",
        uniswapVersion: "v3",
        scPrefix: "#dolphin",
        etherscanUrl:
          "https://etherscan.io/tx/0x23f94e07ac92d0a4d194dcad90cce958b9fdc87d516ebea128c49cc6e8030a2d",
        txHash:
          "0x23f94e07ac92d0a4d194dcad90cce958b9fdc87d516ebea128c49cc6e8030a2d",
        timeStamp: 1664625978379,
        innerText:
          "🚨🚨🚨Swap 2,019,807.00 #USDC ($2,019,807.00 +0.27%) For 103.16 #WBTC @ $19,525.99\n🦄 #v3 Etherscan #0xbeef... #dolphin",
        swap: "#USDC#WBTC",
      },
      {
        trxType: 2,
        swapQty: "1,203,958.35",
        swapCurr: "#USDC",
        swapValue: "$1,203,958.35",
        increase: "+0.28%",
        swapForQty: "61.44",
        swapForCurr: "#WBTC",
        swapForRate: "$19,541.11",
        uniswapVersion: "v3",
        scPrefix: "#fish",
        etherscanUrl:
          "https://etherscan.io/tx/0x60f7b5b66bdd38028d653834cfbe8c228a49b0804b4411c67e8c2fbffbcf222c",
        txHash:
          "0x60f7b5b66bdd38028d653834cfbe8c228a49b0804b4411c67e8c2fbffbcf222c",
        timeStamp: 1664625978379,
        innerText:
          "🚨🚨Swap 1,203,958.35 #USDC ($1,203,958.35 +0.28%) For 61.44 #WBTC @ $19,541.11\n🦄 #v3 Etherscan #0x57c1... #fish",
        swap: "#USDC#WBTC",
      },
      {
        trxType: 2,
        swapQty: "1,079,331.41",
        swapCurr: "#USDC",
        swapValue: "$1,079,331.41",
        increase: "+0.27%",
        swapForQty: "55.06",
        swapForCurr: "#WBTC",
        swapForRate: "$19,550.83",
        uniswapVersion: "v3",
        scPrefix: "#fish",
        etherscanUrl:
          "https://etherscan.io/tx/0xbb8128584809f72b868a1f75f7d66d76788c68ff93acebfe511c0b9712461b50",
        txHash:
          "0xbb8128584809f72b868a1f75f7d66d76788c68ff93acebfe511c0b9712461b50",
        timeStamp: 1664625978379,
        innerText:
          "🚨🚨Swap 1,079,331.41 #USDC ($1,079,331.41 +0.27%) For 55.06 #WBTC @ $19,550.83\n🦄 #v3 Etherscan #0x57c1... #fish",
        swap: "#USDC#WBTC",
      },
      {
        trxType: 2,
        swapQty: "2,271,595.00",
        swapCurr: "#USDC",
        swapValue: "$2,271,595.00",
        increase: "+0.27%",
        swapForQty: "115.80",
        swapForCurr: "#WBTC",
        swapForRate: "$19,564.23",
        uniswapVersion: "v3",
        scPrefix: "#dolphin",
        etherscanUrl:
          "https://etherscan.io/tx/0x7ea8798d0afb391b8a4faf7c126bfdaf0a76af46375a9a655a07805ecefb400b",
        txHash:
          "0x7ea8798d0afb391b8a4faf7c126bfdaf0a76af46375a9a655a07805ecefb400b",
        timeStamp: 1664625978379,
        innerText:
          "🚨🚨🚨Swap 2,271,595.00 #USDC ($2,271,595.00 +0.27%) For 115.80 #WBTC @ $19,564.23\n🦄 #v3 Etherscan #0xbeef... #dolphin",
        swap: "#USDC#WBTC",
      },
      {
        trxType: 2,
        swapQty: "1,516,348.54",
        swapCurr: "#USDC",
        swapValue: "$1,516,348.54",
        increase: "+0.28%",
        swapForQty: "77.24",
        swapForCurr: "#WBTC",
        swapForRate: "$19,576.86",
        uniswapVersion: "v3",
        scPrefix: "#dolphin",
        etherscanUrl:
          "https://etherscan.io/tx/0x7faf4bde900d95ce004b41688dbdbc7342885de51ccb7951f116f87e57b5cc67",
        txHash:
          "0x7faf4bde900d95ce004b41688dbdbc7342885de51ccb7951f116f87e57b5cc67",
        timeStamp: 1664625978385,
        innerText:
          "🚨🚨🚨Swap 1,516,348.54 #USDC ($1,516,348.54 +0.28%) For 77.24 #WBTC @ $19,576.86\n🦄 #v3 Etherscan #0x57c1... #dolphin",
        swap: "#USDC#WBTC",
      },
      {
        trxType: 2,
        swapQty: "2,455,086.00",
        swapCurr: "#USDC",
        swapValue: "$2,455,086.00",
        increase: "+0.26%",
        swapForQty: "124.95",
        swapForCurr: "#WBTC",
        swapForRate: "$19,596.79",
        uniswapVersion: "v3",
        scPrefix: "#dolphin",
        etherscanUrl:
          "https://etherscan.io/tx/0x380c07b664e5178a1682977d347193fbec474d02d147b66dab6a612d909c69cf",
        txHash:
          "0x380c07b664e5178a1682977d347193fbec474d02d147b66dab6a612d909c69cf",
        timeStamp: 1664625978385,
        innerText:
          "🚨🚨🚨Swap 2,455,086.00 #USDC ($2,455,086.00 +0.26%) For 124.95 #WBTC @ $19,596.79\n🦄 #v3 Etherscan #0xbeef... #dolphin",
        swap: "#USDC#WBTC",
      },
    ],
    swapCurr: "USDC",
    swapForCurr: "WBTC",
  },
  {
    swap: "#WBTC#ETH",
    count: 1,
    totalValue: 1526702.54,
    swapQty: 78.72,
    swapForQty: 1140.89,
    msgList: [
      {
        trxType: 2,
        swapQty: "78.72",
        swapCurr: "#WBTC",
        swapValue: "$1,526,702.54",
        increase: "+0.14%",
        swapForQty: "1,140.89",
        swapForCurr: "#ETH",
        swapForRate: "$1,336.24",
        uniswapVersion: "v3",
        scPrefix: "#dolphin",
        etherscanUrl:
          "https://etherscan.io/tx/0x26114f6909c3ba300862dcdfff387920ebb124e1a67e04f9c279660e99abc73f",
        txHash:
          "0x26114f6909c3ba300862dcdfff387920ebb124e1a67e04f9c279660e99abc73f",
        timeStamp: 1664625978379,
        innerText:
          "🚨🚨🚨Swap 78.72 #WBTC ($1,526,702.54 +0.14%) For 1,140.89 #ETH @ $1,336.24\n🦄 #v3 Etherscan #0xa69b... #dolphin",
        swap: "#WBTC#ETH",
      },
    ],
    swapCurr: "WBTC",
    swapForCurr: "ETH",
  },
  {
    swap: "#HEX#USDC",
    count: 3,
    totalValue: 565351.64,
    swapQty: 16774304.620000001,
    swapForQty: 564619.32,
    msgList: [
      {
        trxType: 1,
        swapQty: "3,994,904.71",
        swapCurr: "#HEX",
        swapValue: "$136,633.42",
        increase: "+0.01%",
        swapForQty: "136,617.77",
        swapForCurr: "#USDC",
        swapForRate: "$0.03",
        uniswapVersion: "v3",
        scPrefix: "#0x7637...",
        etherscanUrl:
          "https://etherscan.io/tx/0xe63038faba8dcd0365807d0677da5b587658690880fb2cf58232a12a8ba06a2c",
        txHash:
          "0xe63038faba8dcd0365807d0677da5b587658690880fb2cf58232a12a8ba06a2c",
        timeStamp: 1664625880902,
        innerText:
          "🐻 Swap 3,994,904.71 #HEX ($136,633.42 +0.01%) For 136,617.77 #USDC @ $0.03\n🦄 #v3 Etherscan #0x7637...",
        swap: "#HEX#USDC",
      },
      {
        trxType: 1,
        swapQty: "3,167,987.24",
        swapCurr: "#HEX",
        swapValue: "$107,381.90",
        increase: "+0.14%",
        swapForQty: "107,236.18",
        swapForCurr: "#USDC",
        swapForRate: "$0.03",
        uniswapVersion: "v3",
        scPrefix: "#0x91df...",
        etherscanUrl:
          "https://etherscan.io/tx/0x879e4aeab279793e1e2ca3b107140e8965eed38033ff2c38c2b7149f7ece1ff0",
        txHash:
          "0x879e4aeab279793e1e2ca3b107140e8965eed38033ff2c38c2b7149f7ece1ff0",
        timeStamp: 1664625880970,
        innerText:
          "🐻 Swap 3,167,987.24 #HEX ($107,381.90 +0.14%) For 107,236.18 #USDC @ $0.03\n🦄 #v3 Etherscan #0x91df...",
        swap: "#HEX#USDC",
      },
      {
        trxType: 1,
        swapQty: "9,611,412.67",
        swapCurr: "#HEX",
        swapValue: "$321,336.32",
        increase: "+0.18%",
        swapForQty: "320,765.37",
        swapForCurr: "#USDC",
        swapForRate: "$0.03",
        uniswapVersion: "v3",
        scPrefix: "#0xac28...",
        etherscanUrl:
          "https://etherscan.io/tx/0xc6704e7462daea3063bc55748d59f64f2485894b975f115b6237f26d28265cff",
        txHash:
          "0xc6704e7462daea3063bc55748d59f64f2485894b975f115b6237f26d28265cff",
        timeStamp: 1664625880971,
        innerText:
          "🐻 Swap 9,611,412.67 #HEX ($321,336.32 +0.18%) For 320,765.37 #USDC @ $0.03\n🦄 #v3 Etherscan #0xac28...",
        swap: "#HEX#USDC",
      },
    ],
    swapCurr: "HEX",
    swapForCurr: "USDC",
  },
  {
    swap: "#USDC#HEX",
    count: 1,
    totalValue: 381795.06,
    swapQty: 381795.06,
    swapForQty: 2747514.25,
    msgList: [
      {
        trxType: 0,
        swapQty: "381,795.06",
        swapCurr: "#USDC",
        swapValue: "$381,795.06",
        increase: "",
        swapForQty: "2,747,514.25",
        swapForCurr: "#HEX",
        swapForRate: "$0.03",
        uniswapVersion: "v3",
        scPrefix: "#0xf2f4...",
        etherscanUrl:
          "https://etherscan.io/tx/0xfe50b1087e90795344fded2ca91fad32bd40b9b1760eb51b6b45d6d9394ada21",
        txHash:
          "0xfe50b1087e90795344fded2ca91fad32bd40b9b1760eb51b6b45d6d9394ada21",
        timeStamp: 1664625978379,
        innerText:
          "Swap 381,795.06 #USDC ($381,795.06) For 2,747,514.25 #HEX @ $0.03\n🦄 #v3 Etherscan #0xf2f4...",
        swap: "#USDC#HEX",
      },
    ],
    swapCurr: "USDC",
    swapForCurr: "HEX",
  },
  {
    swap: "#ETH#UNI",
    count: 2,
    totalValue: 279882.33,
    swapQty: 208.69,
    swapForQty: 42485.97,
    msgList: [
      {
        trxType: 0,
        swapQty: "87.51",
        swapCurr: "#ETH",
        swapValue: "$117,365.54",
        increase: "+0.32%",
        swapForQty: "18,000.27",
        swapForCurr: "#UNI",
        swapForRate: "$6.54",
        uniswapVersion: "v3",
        scPrefix: "#0x57c1...",
        etherscanUrl:
          "https://etherscan.io/tx/0x3afe074bdb695a45c3be4f8cb2b46c5b4e51389c007cf9974bdb883e323de700",
        txHash:
          "0x3afe074bdb695a45c3be4f8cb2b46c5b4e51389c007cf9974bdb883e323de700",
        timeStamp: 1664625978379,
        innerText:
          "Swap 87.51 #ETH ($117,365.54 +0.32%) For 18,000.27 #UNI @ $6.54\n🦄 #v3 Etherscan #0x57c1...",
        swap: "#ETH#UNI",
      },
      {
        trxType: 0,
        swapQty: "121.18",
        swapCurr: "#ETH",
        swapValue: "$162,516.79",
        increase: "+0.51%",
        swapForQty: "24,485.70",
        swapForCurr: "#UNI",
        swapForRate: "$6.67",
        uniswapVersion: "v3",
        scPrefix: "#0x5617...",
        etherscanUrl:
          "https://etherscan.io/tx/0x8db0ae640774369c24184d977fec8dbad5434931ad9e1a2432ad0d41683a9343",
        txHash:
          "0x8db0ae640774369c24184d977fec8dbad5434931ad9e1a2432ad0d41683a9343",
        timeStamp: 1664625978379,
        innerText:
          "Swap 121.18 #ETH ($162,516.79 +0.51%) For 24,485.70 #UNI @ $6.67\n🦄 #v3 Etherscan #0x5617...",
        swap: "#ETH#UNI",
      },
    ],
    swapCurr: "ETH",
    swapForCurr: "UNI",
  },
  {
    swap: "#USDT#BOB",
    count: 1,
    totalValue: 150998.85,
    swapQty: 151000,
    swapForQty: 150985.74,
    msgList: [
      {
        trxType: 0,
        swapQty: "151,000.00",
        swapCurr: "#USDT",
        swapValue: "$150,998.85",
        increase: "+0.05%",
        swapForQty: "150,985.74",
        swapForCurr: "#BOB",
        swapForRate: "$1.00",
        uniswapVersion: "v3",
        scPrefix: "#0x242b...",
        etherscanUrl:
          "https://etherscan.io/tx/0xdd691841d8f9d7027b3f560c60cb805836b39b3006d534136fbf9d56210dafea",
        txHash:
          "0xdd691841d8f9d7027b3f560c60cb805836b39b3006d534136fbf9d56210dafea",
        timeStamp: 1664625880969,
        innerText:
          "Swap 151,000.00 #USDT ($150,998.85 +0.05%) For 150,985.74 #BOB @ $1.00\n🦄 #v3 Etherscan #0x242b...",
        swap: "#USDT#BOB",
      },
    ],
    swapCurr: "USDT",
    swapForCurr: "BOB",
  },
  {
    swap: "#FRAX#FXS",
    count: 1,
    totalValue: 134054.91,
    swapQty: 133823.82,
    swapForQty: 33056.54,
    msgList: [
      {
        trxType: 0,
        swapQty: "133,823.82",
        swapCurr: "#FRAX",
        swapValue: "$134,054.91",
        increase: "+1.42%",
        swapForQty: "33,056.54",
        swapForCurr: "#FXS",
        swapForRate: "$4.08",
        uniswapVersion: "v2",
        scPrefix: "#0x7932...",
        etherscanUrl:
          "https://etherscan.io/tx/0xdd4002686ed36f30e29a5cce4031ec98d8ce33810e57baadb0f7b84294154f61",
        txHash:
          "0xdd4002686ed36f30e29a5cce4031ec98d8ce33810e57baadb0f7b84294154f61",
        timeStamp: 1664625978387,
        innerText:
          "Swap 133,823.82 #FRAX ($134,054.91 +1.42%) For 33,056.54 #FXS @ $4.08\n#v2 Etherscan #0x7932...",
        swap: "#FRAX#FXS",
      },
    ],
    swapCurr: "FRAX",
    swapForCurr: "FXS",
  },
  {
    swap: "#USDC#UNI",
    count: 1,
    totalValue: 107135.21,
    swapQty: 107135.21,
    swapForQty: 16250,
    msgList: [
      {
        trxType: 0,
        swapQty: "107,135.21",
        swapCurr: "#USDC",
        swapValue: "$107,135.21",
        increase: "+0.47%",
        swapForQty: "16,250.00",
        swapForCurr: "#UNI",
        swapForRate: "$6.56",
        uniswapVersion: "v3",
        scPrefix: "#0x2468...",
        etherscanUrl:
          "https://etherscan.io/tx/0xcb216e82962aad0991ac000e3682653b135c0abf4bcb4f8b7b96e751d87d285d",
        txHash:
          "0xcb216e82962aad0991ac000e3682653b135c0abf4bcb4f8b7b96e751d87d285d",
        timeStamp: 1664625978387,
        innerText:
          "Swap 107,135.21 #USDC ($107,135.21 +0.47%) For 16,250.00 #UNI @ $6.56\n🦄 #v3 Etherscan #0x2468...",
        swap: "#USDC#UNI",
      },
    ],
    swapCurr: "USDC",
    swapForCurr: "UNI",
  },
];
test("getSwapGroupsByCurrency", () => {
  let list = getSwapGroupsByCurrency(swapGroups);
  console.log(list);
});
