export const convertPrice = (price) => {
  var parts = price.toString().split(".");
  const numberPart = parts[0];
  const decimalPart = parts[1];
  const thousands = /\B(?=(\d{3})+(?!\d))/g;
  return (
    numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "")
  );
};

export const sorter = (arr, key) => {
  return arr.sort((a, b) => {
    console.log(a, b);
    return a[key] - b[key];
  });
};
