# calculate-asmd

<h3>JavaScript Arithmetic</h3>

> Production

[0.2 + 0.4 = 0.6 ？](https://github.com/sanshuiwang/Blog/issues/9)

> Usage

<h4>Install</h4>

`yarn add calculate-asmd --dev`

or

`npm install calculate-asmd --save-dev`

<h4>Demo</h4>

```
import { add, sub, mul, div } from 'calculate-asmd'

  const addNum = add(0.2, 0.4);
  console.log("add(0.2, 0.4): ", addNum);
  const addNegative = add(0.2, -0.4);
  console.log("add(0.2, -0.4): ", addNegative);
  /**
   *add(0.2, 0.4):  0.6
   *add(0.2, -0.4):  -0.2
   */

  const subNum = sub(0.2, 0.4);
  console.log("sub(0.2, 0.4): ", subNum);
  const subNegative = sub(0.2, -0.4);
  console.log("sub(0.2, -0.4): ", subNegative);
  /**
   *sub(0.2, 0.4):  -0.2
   *sub(0.2, -0.4):  0.6
   */

  const mulNum = mul(0.57, 100);
  console.log("mul(0.57, 100): ", mulNum);
  const mulNegativ = mul(-0.57, 100);
  console.log("mul(-0.57, 100): ", mulNegativ);
  /**
   *mul(0.57, 100):  57
   *mul(-0.57, 100):  -57
   */

  const divNum = div(0.57, 100);
  console.log("div(0.57, 100): ", divNum);
  const divNegative = div(-0.57, 100);
  console.log("div(-0.57, 100): ", divNegative);
  /**
   *div(0.57, 100):  0.0057
   *div(-0.57, 100):  -0.0057
   */

```
