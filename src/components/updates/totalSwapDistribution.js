import React from "react";
import formatInUSD from "utilities/formatInUSD";
import getNumericalValue from "utilities/getNumericalValue";

const TotalSwapDistribution = (props) => {
  let { list, messages } = props;
  console.log("list", list);

  if (messages.length == 0) {
    return <p>No Data Available...</p>;
  }

  return (
    <div className="col-lg-6">
      <p>Highest Total Swap :</p>
      <p className={"h4 text-primary"}>
        {formatInUSD(getNumericalValue(list[0].totalValue))}
      </p>
      <figcaption className="pt-2">
        {list[0].swapQty} {list[0].swapCurr} For {list[0].swapForQty}{" "}
        {list[0].swapForCurr}
      </figcaption>
      <div className="mt-3">
        <button
          className={"btn my-2 btn-outline-primary dropdown-toggle"}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#collapseTokenValueDistribution"}
        >
          Total Value Swapped {"  "}
        </button>
        <div className="collapse" id={"collapseTokenValueDistribution"}>
          <ul className="list-group list-group-flush rounded">
            {list.map((entry, index) => {
              return (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center text-break fs-6"
                >
                  {getNumericalValue(entry.swapQty)} {entry.swapCurr} For{" "}
                  {getNumericalValue(entry.swapForQty)} {entry.swapForCurr}
                  <span className={"badge rounded-pill bg-primary"}>
                    {getNumericalValue(entry.totalValue)}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TotalSwapDistribution;
