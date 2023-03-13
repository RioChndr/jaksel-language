import { e2eRunFile as e2eTest } from './e2e-test';

describe('End To End Test example 1', () => {
  it('Should return as expected value', (done) => {
    e2eTest(
      {
        target: 'example/example1.jaksel',
        contain:
          'Umur lu 21\nElu tua\nKalo gua umurnya 31\ngua lebih tua\nUdahan ah\n'
      },
      done
    );
  });
});
