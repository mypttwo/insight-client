import axios from "axios";
import { server } from "../../config";
import { webSocketServer } from "../../config";
import React, { useEffect, useState } from "react";
import TotalSwapDistribution from "./totalSwapDistribution";
import { groupBySwap } from "utilities/messageProcessing/groupBySwap";
import SwapPairList from "./swapPairList";
// import ethPriceUrl from "utilities/etherscanApi/ethPrice";
import calcPriceValue from "utilities/messageProcessing/calcPriceValue";
import { RotatingLines } from "react-loader-spinner";
import Updates from "./updates";

const Uniswap = () => {
  const [messages, setMessages] = useState([]);
  const [ethPrice, setEthPrice] = useState(null);
  const [ethPriceTS, setEthPriceTS] = useState("");
  const [ws, setWs] = useState(new WebSocket(webSocketServer));

  useEffect(() => {
    console.time("reading from server");
    axios.get(`${server}uniswap`).then((response) => {
      console.timeEnd("reading from server");
      console.log("msgs", response.data);
      setMessages(response.data);
    });
  }, []);

  const dateFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
    timeZoneName: "short",
  };

  useEffect(() => {
    axios.get(`${server}ethprice`).then((response) => {
      let dateTS = new Date(response.data.timestamp * 1000);
      setEthPriceTS(
        new Intl.DateTimeFormat("en-US", {
          timeStyle: "medium",
          dateStyle: "long",
        }).format(dateTS)
      );
      setEthPrice(parseFloat(response.data.ethPrice));
    });
  }, []);

  useEffect(() => {
    ws.onopen = () => {
      console.log("WebSocket Connected");
    };

    ws.onmessage = (e) => {
      const newmessages = JSON.parse(e.data);
      console.log("newmessages", newmessages);
      setMessages(newmessages);
    };

    return () => {
      ws.onclose = () => {
        console.log("WebSocket Disconnected");
        setWs(new WebSocket(webSocketServer));
      };
    };
  }, [ws.onmessage, ws.onopen, ws.onclose]);

  let swapGroupList = [];
  let messagesWithCalculatedValue = [];
  if (ethPrice) {
    console.time("calcPriceValue");
    messagesWithCalculatedValue = calcPriceValue(messages, ethPrice);
    console.timeEnd("calcPriceValue");
    console.time("groupBySwap");
    swapGroupList = groupBySwap(messagesWithCalculatedValue);
    console.timeEnd("groupBySwap");
  }
  return (
    <div className="container">
      <div className="h3">Uniswap</div>
      <p className="small">
        Based on the last {messages.length} transactions over $75k.{" "}
      </p>
      {ethPrice ? (
        <>
          <p className="small">
            Eth/USD Price on {ethPriceTS} is $ {ethPrice}.
          </p>
          <div className="row my-3 ">
            <TotalSwapDistribution
              messages={messagesWithCalculatedValue}
              list={swapGroupList}
            ></TotalSwapDistribution>
          </div>
          <SwapPairList
            messages={messagesWithCalculatedValue}
            swapGroupList={swapGroupList}
          ></SwapPairList>
          <Updates></Updates>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center">
            <RotatingLines
              strokeColor="rgba(114,212,111, 1)"
              strokeWidth="5"
              animationDuration="1"
              width="96"
              visible={true}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Uniswap;
