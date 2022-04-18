const varReassign = require('../../../lib/logics/parser/varReassign')

describe('Test var assign', () => {
  it('Should parse string correctly', () => {
    const test1 = varReassign("whichis foo itu 'foo'")
    expect(test1.exp).toBe(`foo = 'foo';`)
  })

  it('Should parse number correctly', () => {
    const test1 = varReassign("whichis foo itu 123")
    expect(test1.exp).toBe(`foo = 123;`)
  })

  it('Should return null if not match', () =>{
    const test1 = varReassign("which foo itu 123")
    const test2 = varReassign("whi foo i 123")
    expect(test1).toBe(null)
    expect(test2).toBe(null)
  })
})