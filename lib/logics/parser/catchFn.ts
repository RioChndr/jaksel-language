export default function catchFn(msg) {
  const format = /backstab/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `catch`,
    closeGroup: true,
    openGroup: true
  };
}
