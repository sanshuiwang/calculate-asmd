# calculate-asmd

[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

The precise addition, subtraction, multiplication and division of JavaScript avoids the error of floating point calculation.

<h2>Production</h2>

[0.2 + 0.4 = 0.6 ？](https://github.com/sanshuiwang/Blog/issues/9)

<h2>Install</h2>

`yarn add calculate-asmd`

or

`npm install calculate-asmd --save`

<h2>Usage</h2>

```
  import { add, sub, mul, div } from 'calculate-asmd'

  const addNum = add(0.2, 0.4);
  console.log("add(0.2, 0.4): ", addNum); //add(0.2, 0.4):  0.6
  const addNegative = add(0.2, -0.4);
  console.log("add(0.2, -0.4): ", addNegative); //add(0.2, -0.4):  -0.2

  const subNum = sub(0.2, 0.4);
  console.log("sub(0.2, 0.4): ", subNum);  //sub(0.2, 0.4):  -0.2
  const subNegative = sub(0.2, -0.4);
  console.log("sub(0.2, -0.4): ", subNegative); //sub(0.2, -0.4):  0.6

  const mulNum = mul(0.57, 100);
  console.log("mul(0.57, 100): ", mulNum); //mul(0.57, 100):  57
  const mulNegativ = mul(-0.57, 100);
  console.log("mul(-0.57, 100): ", mulNegativ); //mul(-0.57, 100):  -57

  const divNum = div(0.57, 100);
  console.log("div(0.57, 100): ", divNum); //div(0.57, 100):  0.0057
  const divNegative = div(-0.57, 100);
  console.log("div(-0.57, 100): ", divNegative);  //div(-0.57, 100):  -0.0057

```

<h3>asmd(arg1,arg2)</h3>

`arg1`: Default 0, type number/string

`arg2`: Default 0, type number/string

`Tips: If arg is NaN, it will return NaN directly. If arg is null/undefined/"", arg will be treated as 0`

<h3>div(arg1,arg2)</h3>

`arg2`: If arg2 is 0, it will return Infinity.

<h2>Expand</h2>

```
  import { scaleNum } from 'calculate-asmd'

  scaleNum(0.57, 2)   // 57
  scaleNum(0.57, -2) // 0.0057
  scaleNum(0.57, 0) // 0.57

```

<h2>Test</h2>

[Test Document](https://sanshuiwang.github.io/calculate-asmd/)

<h2>LICENSE</h2>

[MIT License](https://raw.githubusercontent.com/sanshuiwang/calculate-asmd/master/LICENSE)

[npm-url]: https://npmjs.org/package/calculate-asmd
[npm-image]: https://badge.fury.io/js/calculate-asmd.png
[david-url]: https://david-dm.org/sanshuiwang/calculate-asmd.png
[dt-url]: https://img.shields.io/npm/dt/calculate-asmd.svg
[license-url]: https://img.shields.io/npm/l/calculate-asmd.svg
