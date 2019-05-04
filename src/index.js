/**
 * [scaleNum 通过操作其字符串将一个浮点数放大或缩小]
 * @param  {number} num      要放缩的浮点数
 * @param  {number} pos      小数点移动位数
 * pos大于0为放大，小于0为缩小；不传则默认将其变成整数
 * @return {number}          放缩后的数
 */
export const scaleNum = (num, pos) => {
  if (num === 0 || pos === 0) {
    return num
  }

  let absNum = num
  let s = 1
  if (num < 0) {
    absNum = Math.abs(num)
    s = -1
  }

  let parts = absNum.toString().split('.')
  const intLen = parts[0].length
  const decimalLen = parts[1] ? parts[1].length : 0

  // 默认将其变成整数，放大倍数为原来小数位数
  if (pos === undefined || pos === null) {
    return parseFloat(parts[0] + parts[1])
  }

  if (pos > 0) {
    // 放大
    let zeros = pos - decimalLen
    while (zeros > 0) {
      zeros -= 1
      parts.push(0)
    }
  } else {
    // 缩小
    let zeros = Math.abs(pos) - intLen
    while (zeros > 0) {
      zeros -= 1
      parts.unshift(0)
    }
  }

  const idx = intLen + pos
  parts = parts.join('').split('')
  parts.splice(idx > 0 ? idx : 0, 0, '.')

  if (s < 0) {
    parts.unshift('-')
  }

  return parseFloat(parts.join(''))
}

/**
 * [add 通过比较两个加数谁的小数位最大，将两数小数点右移为整数进行计算]
 * @param {number} arg1       加数
 * @param {number} arg2       被加数
 * @return {number}           结果
 */
export const add = (arg1, arg2) => {
  let r1 = 0
  let r2 = 0
  let scale = 0
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }

  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }

  scale = Math.max(r1, r2)
  const num1 = scaleNum(arg1, scale)
  const num2 = scaleNum(arg2, scale)
  const num = num1 + num2
  const result = scaleNum(num, -scale)
  return result
}

/**
 * [sub 通过比较两个加数谁的小数位最大，将两数小数点右移为整数进行计算]
 * @param {number} arg1       减数
 * @param {number} arg2       被减数
 * @return {number}           结果
 */
export const sub = (arg1, arg2) => {
  let r1 = 0
  let r2 = 0
  let scale = 0
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }

  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }

  scale = Math.max(r1, r2)
  const num1 = scaleNum(arg1, scale)
  const num2 = scaleNum(arg2, scale)
  const num = num1 - num2
  const result = scaleNum(num, -scale)
  return result
}

/**
 * [mul 将两个浮点数参数replace掉小数点为整数计算，scale在这里进行累计小数位]
 * @param {number} arg1       乘数
 * @param {number} arg2       被乘数
 * @return {number}           结果
 */
export const mul = (arg1, arg2) => {
  const num1 = Number(arg1.toString().replace('.', ''))
  const num2 = Number(arg2.toString().replace('.', ''))
  let scale = 0

  try {
    scale += arg1.toString().split('.')[1].length
  } catch (e) {
    scale += 0
  }

  try {
    scale += arg2.toString().split('.')[1].length
  } catch (e) {
    scale += 0
  }

  const num = num1 * num2
  const result = scaleNum(num, -scale)
  return result
}

/**
 * [div 将两个浮点数参数replace掉小数点为整数计算，scale是被除数与除数的移动位数差]
 * @param {number} arg1       除数
 * @param {number} arg2       被除数
 * @return {number}           结果
 */
export const div = (arg1, arg2) => {
  const num1 = Number(arg1.toString().replace('.', ''))
  const num2 = Number(arg2.toString().replace('.', ''))
  let left1 = 0
  let left2 = 0
  try {
    left1 = Number(arg1.toString().split('.')[1].length)
  } catch (e) {
    left1 = 0
  }

  try {
    left2 = Number(arg2.toString().split('.')[1].length)
  } catch (e) {
    left2 = 0
  }

  /**
   * 当被除数100是整数没有移动小数位，那么left2为0，除数0.57在运算中转整数为57。
   * 在实际的运算中0.57除以100中的0.57是根据被除数来移动小数的。
   * 所以，0 - 2 = -2。 将运算结果缩小两位为实际小数点位置
   *
   * 除数多拿了被除数的几口口粮，最后要还回去的。
   *
   */
  const scale = left2 - left1
  const num = num1 / num2

  const result = scaleNum(num, scale)
  return result
}
