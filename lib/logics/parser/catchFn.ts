export default function catchFn(msg: string) {
  const format = /backstab/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `catch`,
    closeGroup: true,
    openGroup: true
  };
}
