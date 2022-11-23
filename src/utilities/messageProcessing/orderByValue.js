"use strict";

// @ts-ignore
const accounting = require("accounting-js");

export const orderByValue = (messages) => {
  messages.map(
    (msg) => (msg.swapValueNumber = accounting.unformat(msg.swapValue))
  );
  return messages.sort((m1, m2) => m1.swapValueNumber - m2.swapValueNumber);
};
