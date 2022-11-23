const colorFromDirection = (direction) => {
  let color = "danger";
  if (direction == "from") {
    color = "primary";
  }
  return color;
};

export default colorFromDirection;
