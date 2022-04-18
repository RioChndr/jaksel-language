const varAssign = require('../../../lib/logics/parser/varAssign')

describe('Test var assign', () => {
  it('Should parse string correctly', () => {
    const test1 = varAssign("literally foo itu 'foo'")
    expect(test1.exp).toBe(`let foo = 'foo';`)
  })

  it('Should parse number correctly', () => {
    const test1 = varAssign("literally foo itu 123")
    expect(test1.exp).toBe(`let foo = 123;`)
  })

  it('Should return null if not match', () =>{
    const test1 = varAssign("lit foo itu 123")
    const test2 = varAssign("litetrayl foo i 123")
    expect(test1).toBe(null)
    expect(test2).toBe(null)
  })
})