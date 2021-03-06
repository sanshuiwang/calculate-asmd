/**
 * [scaleNum 将一个number浮点数放大或缩小position个小数点位数]
 * @param  {number} number        要放缩的浮点数
 * @param  {number} position      小数点移动位数
 * position大于0为放大，小于0为缩小，等于0不做缩放。
 * @return {number}               放缩后的数
 */
export const scaleNum = (number = 0, position = 0) => {
  const num = Number(number)
  const posNum = Number(position)
  // 如果传入两个参数，Number转化后为NaN则直接返回NaN
  if (isNaN(num) || isNaN(posNum)) {
    return NaN
  }
  if (num === 0 || posNum === 0) {
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

  if (posNum > 0) {
    // 放大
    let zeros = posNum - decimalLen
    while (zeros > 0) {
      zeros -= 1
      parts.push(0)
    }
  } else {
    // 缩小
    let zeros = Math.abs(posNum) - intLen
    while (zeros > 0) {
      zeros -= 1
      parts.unshift(0)
    }
  }

  const idx = intLen + posNum
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
export const add = (arg1 = 0, arg2 = 0) => {
  const param1 = Number(arg1)
  const param2 = Number(arg2)
  if (isNaN(param1) || isNaN(param2)) {
    return NaN
  }

  let r1 = 0
  let r2 = 0
  let scale = 0
  try {
    r1 = param1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }

  try {
    r2 = param2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }

  scale = Math.max(r1, r2)
  const num1 = scaleNum(param1, scale)
  const num2 = scaleNum(param2, scale)
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
export const sub = (arg1 = 0, arg2 = 0) => {
  const param1 = Number(arg1)
  const param2 = Number(arg2)
  if (isNaN(param1) || isNaN(param2)) {
    return NaN
  }

  let r1 = 0
  let r2 = 0
  let scale = 0
  try {
    r1 = param1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }

  try {
    r2 = param2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }

  scale = Math.max(r1, r2)
  const num1 = scaleNum(param1, scale)
  const num2 = scaleNum(param2, scale)
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
export const mul = (arg1 = 0, arg2 = 0) => {
  const param1 = Number(arg1)
  const param2 = Number(arg2)
  if (isNaN(param1) || isNaN(param2)) {
    return NaN
  }

  const num1 = Number(param1.toString().replace('.', ''))
  const num2 = Number(param2.toString().replace('.', ''))
  let scale = 0

  try {
    scale += param1.toString().split('.')[1].length
  } catch (e) {
    scale += 0
  }

  try {
    scale += param2.toString().split('.')[1].length
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
export const div = (arg1 = 0, arg2 = 0) => {
  const param1 = Number(arg1)
  const param2 = Number(arg2)
  if (isNaN(param1) || isNaN(param2)) {
    return NaN
  }

  const num1 = Number(param1.toString().replace('.', ''))
  const num2 = Number(param2.toString().replace('.', ''))
  let left1 = 0
  let left2 = 0
  try {
    left1 = Number(param1.toString().split('.')[1].length)
  } catch (e) {
    left1 = 0
  }

  try {
    left2 = Number(param2.toString().split('.')[1].length)
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
