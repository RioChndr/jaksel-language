export default function finallyFn(msg: string) {
  const format = /yaudahlahya/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `finally`,
    closeGroup: true,
    openGroup: true
  };
}
