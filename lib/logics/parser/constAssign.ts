import valueTransform from '../../utils/valueTransform';

export default function constAssign(msg) {
  const format = /seriously ([a-zA-Z_]+[a-zA-Z0-9_]*) itu ([^()[\]\n]+)/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `const ${match[1]} = ${valueTransform(match[2])};`
  };
}
