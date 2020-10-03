export default {
  money: (number, places, symbol = '', thousand, decimal) => {
    places = !isNaN((places = Math.abs(places))) ? places : 2;
    symbol = symbol !== undefined ? symbol : "$";
    thousand = thousand || ",";
    decimal = decimal || ".";
    let _number = number,
      negative = _number < 0 ? "-" : "",
      i =
        parseInt((_number = Math.abs(+_number || 0).toFixed(places)), 10) + "",
      j = (j = i.length) > 3 ? j % 3 : 0;
    return (
      negative +
      (j ? i.substr(0, j) + thousand : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) +
      (places
        ? decimal +
        Math.abs(_number - i)
          .toFixed(places)
          .slice(2)
        : "") +
      (symbol !== '' ? " " + symbol : "")
    );
  },

  floatDecFormat(value, dec) {
    dec = dec || 0;
    if (!value) {
      return 0;
    }
    return parseFloat(`${value}`.replace(/[^0-9-.]/g, '')).toFixed((dec ? dec : 2));
  },

  stringToFloat: (str, decimal) => {
    const n = parseFloat(`${str}`.replace(/[^0-9-.]/g, '')).toFixed((decimal ? decimal : 2));
    return n;
  },
}