const assert = require('assert')
const { expect } = require('chai')
const { add, sub, mul, div, scaleNum } = require('../')

describe('scaleNum', () => {
  describe('#scaleNum(0.57, 2)', () => {
    it('should equal 57', () => {
      assert.equal(scaleNum(0.57, 2), 57)
    })
  })

  describe('#scaleNum(0.57, -2)', () => {
    it('should equal 0.0057', () => {
      assert.equal(scaleNum(0.57, -2), 0.0057)
    })
  })

  describe('#scaleNum(-0.57, 2)', () => {
    it('should equal -57', () => {
      assert.equal(scaleNum(-0.57, 2), -57)
    })
  })

  describe('#scaleNum(-0.57, -2)', () => {
    it('should equal -0.0057', () => {
      assert.equal(scaleNum(-0.57, -2), -0.0057)
    })
  })

  describe('#scaleNum(0.57, 0)', () => {
    it('should equal 0.57', () => {
      assert.equal(scaleNum(0.57, 0), 0.57)
    })
  })
})

describe("Invalid param in the scaleNum's first param", () => {
  describe('#scaleNum("", 2)', () => {
    it('should equal 0', () => {
      assert.equal(scaleNum('', 2), 0)
    })
  })

  describe('#scaleNum("  ", 2)', () => {
    it('should equal 0', () => {
      assert.equal(scaleNum('  ', 2), 0)
    })
  })

  describe('#scaleNum(NaN, 2)', () => {
    it('should equal NaN', () => {
      const num = scaleNum(NaN, 2)
      assert(expect(num).to.be.NaN)
    })
  })

  describe('#scaleNum(null, 2)', () => {
    it('should equal 2', () => {
      assert.equal(scaleNum(null, 2), 0)
    })
  })

  describe('#scaleNum(undefined, 2)', () => {
    it('should equal 2', () => {
      assert.equal(scaleNum(undefined, 2), 0)
    })
  })
})

describe("Invalid param in the scaleNum's two param", () => {
  describe('#scaleNum(0.57,"")', () => {
    it('should equal 0.57', () => {
      assert.equal(scaleNum(0.57, ''), 0.57)
    })
  })

  describe('#scaleNum(0.57,"  ")', () => {
    it('should equal 0.57', () => {
      assert.equal(scaleNum(0.57, '  '), 0.57)
    })
  })

  describe('#scaleNum(0.57,NaN)', () => {
    it('should equal NaN', () => {
      assert(expect(scaleNum(0.57, NaN)).to.be.NaN)
    })
  })

  describe('#scaleNum(0.57,null)', () => {
    it('should equal 0.57', () => {
      assert.equal(scaleNum(0.57, null), 0.57)
    })
  })

  describe('#scaleNum(0.57,undefined)', () => {
    it('should equal 0.57', () => {
      assert.equal(scaleNum(0.57, undefined), 0.57)
    })
  })
})

describe('ADD', () => {
  describe('#add(0.2, 0.4)', () => {
    const addNum = add(0.2, 0.4)
    it('addNum should equal 0.6', () => {
      assert.equal(addNum, 0.6)
    })
  })

  describe('#add(0.2, -0.4)', () => {
    const addNegative = add(0.2, -0.4)
    it('addNegative should equal -0.2', () => {
      assert.equal(addNegative, -0.2)
    })
  })

  describe('#add("", 0.4)', () => {
    const addNegative = add('', 0.4)
    it('addNegative should equal 0.4', () => {
      assert.equal(addNegative, 0.4)
    })
  })

  describe('#add(undefined, 0.4)', () => {
    const addNegative = add(undefined, 0.4)
    it('addNegative should equal 0.4', () => {
      assert.equal(addNegative, 0.4)
    })
  })

  describe('#add(null, null)', () => {
    const addNegative = add(null, null)
    it('addNegative should equal 0', () => {
      assert.equal(addNegative, 0)
    })
  })

  describe('#add(0.4, NaN)', () => {
    const addNegative = add(0.4, NaN)
    it('addNegative should equal NaN', () => {
      assert(expect(addNegative).to.be.NaN)
    })
  })

  describe('#add("0.d2", NaN)', () => {
    const addNegative = add('0.d2', 0.4)
    it('addNegative should equal NaN', () => {
      assert(expect(addNegative).to.be.NaN)
    })
  })
})

describe('SUB', () => {
  describe('#sub(0.2, 0.4)', () => {
    const subNum = sub(0.2, 0.4)
    it('subNum should equal -0.2', () => {
      assert.equal(subNum, -0.2)
    })
  })

  describe('#sub(0.2, -0.4)', () => {
    const subNegative = sub(0.2, -0.4)
    it('subNegative should equal 0.6', () => {
      assert.equal(subNegative, 0.6)
    })
  })

  describe('#sub(0.2, null)', () => {
    const subNegative = sub(0.2, null)
    it('subNegative should equal 0.2', () => {
      assert.equal(subNegative, 0.2)
    })
  })

  describe('#sub(undefined, 0.2)', () => {
    const subNegative = sub(undefined, 0.2)
    it('subNegative should equal -0.2', () => {
      assert.equal(subNegative, -0.2)
    })
  })

  describe('#sub(NaN, 0.2)', () => {
    const subNegative = sub(NaN, 0.2)
    it('subNegative should equal NaN', () => {
      assert(expect(subNegative).to.be.NaN)
    })
  })

  describe('#sub(" ", 0.2)', () => {
    const subNegative = sub(' ', 0.2)
    it('subNegative should equal -0.2', () => {
      assert.equal(subNegative, -0.2)
    })
  })
})

describe('MUL', () => {
  describe('#mul(0.57, 100)', () => {
    const mulNum = mul(0.57, 100)
    it('mulNum should equal 57', () => {
      assert.equal(mulNum, 57)
    })
  })

  describe('#mul(-0.57, 100)', () => {
    const mulNegative = mul(-0.57, 100)
    it('mulNegative should equal -57', () => {
      assert.equal(mulNegative, -57)
    })
  })

  describe('#mul(null, 100)', () => {
    const mulNegative = mul(null, 100)
    it('mulNegative should equal 0', () => {
      assert.equal(mulNegative, 0)
    })
  })

  describe('#mul("0.a4", 0.2)', () => {
    const mulNegative = mul('0.a4', 0.2)
    it('mulNegative should equal NaN', () => {
      assert(expect(mulNegative).to.be.NaN)
    })
  })
})

describe('DIV', () => {
  describe('#div(0.57, 100)', () => {
    const divNum = div(0.57, 100)
    it('divNum should equal 0.0057', () => {
      assert.equal(divNum, 0.0057)
    })
  })

  describe('#div(-0.57, 100)', () => {
    const divNegative = div(-0.57, 100)
    it('divNegative should equal -0.0057', () => {
      assert.equal(divNegative, -0.0057)
    })
  })

  describe('#div(null, 10)', () => {
    const divNegative = div(null, 10)
    it('divNegative should equal 0', () => {
      assert.equal(divNegative, 0)
    })
  })

  describe('#div(" ", 10)', () => {
    const divNegative = div(' ', 10)
    it('divNegative should equal 0', () => {
      assert.equal(divNegative, 0)
    })
  })

  describe('#div(100, NaN)', () => {
    const divNegative = div(100, NaN)
    it('divNegative should equal NaN', () => {
      assert(expect(divNegative).to.be.NaN)
    })
  })

  describe('#div(100, null)', () => {
    const divNegative = div(100, null)
    it('divNegative should equal Infinity', () => {
      assert.equal(divNegative, Infinity)
    })
  })

  describe('#div(100, 0)', () => {
    const divNegative = div(100, 0)
    it('divNegative should equal Infinity', () => {
      assert.equal(divNegative, Infinity)
    })
  })
})
