import { exec } from 'child_process';

interface Options {
  interpreter?: string;
  target?: string;
  contain?: string;
}
const defaultOptions: Options = {
  interpreter: 'jaksel-interpreter.ts',
  target: 'example/example1.jaksel',
  contain: null
};
export function e2eRunFile(options: Options, doneCallback: jest.DoneCallback) {
  if (!options || typeof options !== 'object') {
    // default options
    options = defaultOptions;
  }
  const selectedOption = { ...defaultOptions };
  Object.assign(selectedOption, options);
  exec(
    `yarn ts-node ${selectedOption.interpreter} ${selectedOption.target}`,
    (err, stdout, stderr) => {
      if (stdout) {
        expect(stdout).toContain(selectedOption.contain);
      }
      if (err) {
        doneCallback(err);
      }
      if (stderr) {
        doneCallback(err);
      }
      doneCallback();
    }
  );
}
