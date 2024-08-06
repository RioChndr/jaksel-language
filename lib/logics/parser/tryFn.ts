export default function tryFn(msg: string) {
  const format = /trust issue/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `try`,
    openGroup: true
  };
}
