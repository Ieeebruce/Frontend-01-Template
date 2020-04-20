/*
NumericLiteral ::
    DecimalLiteral
        DecimalIntegerLiteral . DecimalDigits? ExponentPart?
        ^(0|([1-9]\d*))  .  (\d*)    ([eE](([+-]\d+)|(\d+)))?$
        . DecimalDigits ExponentPart?
        ^. \d+ ([eE](([+-]\d+)|(\d+)))?$
        DecimalIntegerLiteral ExponentPart?
        ^(0|([1-9]\d*))  ([eE](([+-]\d+)|(\d+)))?$



    BinaryIntegerLiteral
        0[bB][01]+
    OctalIntegerLiteral
        0[oO][0-7]+
    HexIntegerLiteral
        0[xX][0-9a-fA-F]+
*/

var reg_1 =  /(^(0|([1-9]\d*))\.(\d*)([eE](([+-]\d+)|(\d+)))?$)|(^\.\d+([eE](([+-]\d+)|(\d+)))?$)|(^(0|([1-9]\d*))([eE](([+-]\d+)|(\d+)))?$)/  // 十进制
var reg_2 = /^0[bB][01]+$/  // 二进制
var reg_3 = /^0[oO][0-7]+$/ // 八进制
var reg_4 = /^0[xX][0-9a-fA-F]+$/ // 十六进制

var reg = /(^(0|([1-9]\d*))\.(\d*)([eE](([+-]\d+)|(\d+)))?$)|(^\.\d+([eE](([+-]\d+)|(\d+)))?$)|(^(0|([1-9]\d*))([eE](([+-]\d+)|(\d+)))?$)|(^0[bB][01]+$)|(^0[oO][0-7]+$)|(^0[xX][0-9a-fA-F]+$)/