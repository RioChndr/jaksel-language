import valueTransform from '../../utils/valueTransform';

export default function awaitProcess(msg: string) {
  const format = /makesure/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `await ${valueTransform(match[3])};`
  };
}
