# calculate-asmd

<h3>JavaScript Arithmetic</h3>

> Production

[0.2 + 0.4 = 0.6 ？](https://github.com/sanshuiwang/Blog/issues/9)

> Usage

<h4>Install</h4>

`yarn add calculate-asmd`

or

`npm install calculate-asmd --save`

<h4>Demo</h4>

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

<h4>Expand</h4>

```
  import { scaleNum } from 'calculate-asmd'

  scaleNum(0.57, 2)   // 57
  scaleNum(0.57, -2) // 0.0057
  scaleNum(0.57, 0) // 0.57

```
