const checkInteger = (value) => {
  if (typeof value === "number") {
    return value % 1 === 0;
  } else return false;
};

const sum = (num1, num2) => {
  if (typeof num1 !== "number") return NaN;
  if (typeof num2 !== "number") return NaN;
  return num1 + num2;
};

module.exports = {
  checkInteger,
  sum,
};
