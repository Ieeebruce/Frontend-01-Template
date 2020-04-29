/**
 * 7.1.12.1 NumberToString ( m )
 * 1. If m is NaN, return the String "NaN".
 * 2. If m is +0 or -0, return the String "0".
 * 3. If m is less than zero, return the string-concatenation of "-" and ! NumberToString(-m).
 * 4. If m is +∞, return the String "Infinity".
 * */

function convertNumberToString(number, hex) {
  if (isNaN(number)) {
    return "NaN";
  }
  if (1 / number === Infinity || 1 / number === -Infinity) {
    return "0";
  }
  if (number < 0) {
    return "-" + convertNumberToString(0 - number);
  }
  if (number === Infinity) {
    return "Infinity";
  }
  let integer = Math.floor(number); // 整数部分
  let fraction = number - integer; // 小数部分
  let string = "";
  while (integer > 0) {
    string = (integer % hex) + string;
    integer = Math.floor(integer / hex);
  }
  string += ".";
  // 没有做小数截断
  while (fraction < 1 && fraction > 0) {
    fraction = fraction * hex;
    string += Math.floor(fraction);
    fraction = fraction - Math.floor(fraction);
  }
  return string;
}

console.log(convertNumberToString(1234.34343, 10));
