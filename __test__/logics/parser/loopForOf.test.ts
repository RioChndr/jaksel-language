import loopForOf from '../../../lib/logics/parser/loopForOf';
import getTsFormat from '../test-parser-helper';

describe('Test var assign', () => {
  it('Should return null if not match', () => {
    const test1 = loopForOf('fomo semu foo dari bar');
    const test2 = loopForOf('fomo smua foo dar bar');
    expect(test1).toBe(null);
    expect(test2).toBe(null);
  });

  it('Should return correctly flexing', () => {
    const jsFormat = getTsFormat(`
      fomo semua foo dari bar
        spill foo
      udahan
    `);
    expect(jsFormat).not.toBeNull();
    const shouldMatch = ['for (const foo of bar) {', 'console.log(foo)', '}'];
    jsFormat.split('\n').every((v, i) => {
      if (!shouldMatch[i]) return true;
      return expect(v).toContain(shouldMatch[i]);
    });
  });
});
