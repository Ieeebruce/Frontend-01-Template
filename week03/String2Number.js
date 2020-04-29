function convertStringToNumber(string, hex) {
  let chars = string.split("");
  let number = 0;
  let i = 0;
  if (string[0] === "-") {
    return 0 - convertStringToNumber(string.slice(1), hex);
  }
  if (string[0] === "+") {
    return convertStringToNumber(string.slice(1), hex);
  }
  // 整数部分
  while (i < chars.length && chars[i] !== ".") {
    number = number * hex;
    number += chars[i].codePointAt(0) - "0".codePointAt(0);
    i++;
  }
  while (chars[i] === ".") {
    i++;
  }
  // 小数部分
  let fraction = 1;
  while (chars[i] < chars.length) {
    fraction = fraction / hex;
    var temp = chars[i].codePointAt(0) - "0".codePointAt(0);
    if (i < chars.length - 1) {
      number += temp * fraction;
    } else {
      number += Math.ceil(temp) * fraction;
    }
    i++;
  }
  return number;
}
console.log(convertStringToNumber("1010.666", 10));
