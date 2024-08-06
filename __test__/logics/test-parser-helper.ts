import { cmdToTs, flexing } from '../../lib/utils/index';

export default function getTsFormat(input) {
  const cmd = flexing(input);
  return cmdToTs(cmd);
}
