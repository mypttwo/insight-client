const getNumericalValue = (val, precision = 2) => {
  if (typeof val === "string" || val instanceof String) {
    return (
      Math.round(Math.pow(10, precision) * Number(val.replace(/,/g, ""))) /
      Math.pow(10, precision)
    );
  } else {
    return Math.round(Math.pow(10, precision) * val) / Math.pow(10, precision);
  }
};

export default getNumericalValue;

// console.log(getNumericalValue("12,7,9,51.625555"));
// console.log(getNumericalValue(127951.625555));
