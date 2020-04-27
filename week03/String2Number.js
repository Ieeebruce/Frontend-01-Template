function convertStringToNumber(string, hex){
    let chars = string.split('')
    let number = 0
    let i = 0
    // 整数部分
    while(i < chars.length && chars[i] !== '.'){
        number = number * hex
        number += chars[i].codePointAt(0) - '0'.codePointAt(0)
        i++
    }
    while(chars[i] === '.'){
        i++
    }
    // 小数部分
    let fraction = 1
    while(chars[i] < chars.length){
        fraction = fraction / hex
        number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction
        i++
    }
    return number
}
console.log(convertStringToNumber('11230.02313', 2));

