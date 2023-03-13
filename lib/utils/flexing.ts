import getCmd from '../logics/index';

export default function flexing(input: string) {
  const cmdLines = input
    .replace(/\r\n/g, `\n`)
    .split('\n')
    .filter((v) => !!v);
  const cmds = getCmd(cmdLines);
  return cmds;
}
