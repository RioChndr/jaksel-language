import valueTransform from '../../utils/valueTransform';
import { mapCompare } from '../../utils/mapCompare';

export default function conditionElIf(msg: string) {
  const format = /perhaps ([a-zA-Z0-9]+) ([a-zA-Z ]+) ([^()[\]\n]+)/;
  const match = msg.match(format);
  if (!match) return null;
  if (match[2]) {
    match[2] = mapCompare[match[2]];
  }

  return {
    exp: `else if (${match[1]} ${match[2]} ${valueTransform(match[3])})`,
    closeGroup: true,
    openGroup: true
  };
}
