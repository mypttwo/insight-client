import axios from "axios";
import React, { useEffect, useState } from "react";
import { server, webSocketServer } from "../../config";

const genMsgRow = (msg, index) => {
  let color = "table-active";
  if (index % 2 == 0) {
    color = "";
  } else {
    color = "table-active";
  }

  let keyStr = `${msg.txHash}_${index}`;

  switch (msg.trxType) {
    case 1:
      color = "text-danger";
      break;

    case 2:
      color = "text-success";
      break;
  }

  return (
    <tr
      className="table fs-6"
      style={{ cursor: "pointer" }}
      onClick={() => window.open(msg.etherscanUrl, "_blank")}
      key={index}
    >
      <td className={color}>
        {msg.swapQty} {msg.swapCurr.replace("#", "")}
      </td>
      <td className={color}>
        {msg.swapForQty} {msg.swapForCurr.replace("#", "")}
      </td>
      <td className={color}>{msg.swapValue}</td>
      {/* <td>{msg.increase}</td>
      <td>{msg.swapForRate}</td> */}
    </tr>
  );
};

const Updates = () => {
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(new WebSocket(webSocketServer));

  useEffect(() => {
    axios.get(`${server}uniswap`).then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    ws.onopen = () => {
      console.log("WebSocket Connected");
    };

    ws.onmessage = (e) => {
      const newmessages = JSON.parse(e.data);
      console.log(newmessages);
      setMessages(newmessages);
    };

    return () => {
      ws.onclose = () => {
        console.log("WebSocket Disconnected");
        setWs(new WebSocket(webSocketServer));
      };
    };
  }, [ws.onmessage, ws.onopen, ws.onclose]);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-12 d-flex justify-content-center p-5">
          <table className="table table-hover">
            <thead>
              <tr className="fs-5">
                <td scope="col">Swap</td>
                <td scope="col">For</td>
                <td scope="col">Value</td>
                {/* <td scope="col">@</td>
                <td scope="col">Increase</td> */}
              </tr>
            </thead>
            <tbody>{messages.map((msg, index) => genMsgRow(msg, index))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Updates;
