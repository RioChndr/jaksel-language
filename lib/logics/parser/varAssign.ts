import valueTransform from '../../utils/valueTransform';
export default function varAssign(msg) {
  const format = /literally ([a-zA-Z_]+[a-zA-Z0-9_]*) itu ([^()[\]\n]+)/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `let ${match[1]} = ${valueTransform(match[2])};`
  };
}
