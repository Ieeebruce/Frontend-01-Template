# ECMAScript Language

### 一般命令式编程语言构成
  1. Atom
     - Identifier 标识符
     - Literal 直接量
  2. Expression 表达式
     - Atom
     - Operator 操作符
     - Punctuator 符号
  3. Statement
     - Expression
     - Keyword
     - Punctuator
  4. Structure
     - Function
     - Class
     - Process
     - Namespace
  5. Program
     - Program
     - Mould
     - Package
     - Library

#### Atom Identifier & Literal

  - WhiteSpace
    - \<TAB\>：`\t`
    - \<VT\>： `\v`
    - \<FF\>：`\f` 
    - \<SP\>：`\s`
    - \<NBSP\>：NO-BREAK SPACE
    - \<ZWNBSP\>：ZERO WIDTH NO-BREAK SPACE
    - \<USP\>
  - LineTerminator
    - \<LF\>：`\n`
    - \<CR\>：`\r`
    - \<LS\>
    - \<PS\>
  - Comment
    - // comment
    - /* comment */
  - CommonToken
    - IdentifierName
      - 变量名
      - 关键字
    - Punctuator 符号
    - NumericLiteral
    - StringLiteral
    - Template
    
#### 基本类型
- Type
  - Number
    - 浮点数比较: Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON
    - 1.1 + 1.3 - 2.4
  - String
    - 支持码点: U+0000 ~ U+10FFFF， 但推荐只使用 U+0000 ~ U+FFFF （BMP） 最好在ACSII范围内
    - 存储方式: UTF8/UTF16
  - Boolean
    - true
    - false
  - Null
  - Undifined 设计成一个变量 全局下的undefined不能更改，但是局部作用域下的undefined可以当作变量使用
  - Symbol