export default function finallyFn(msg) {
  const format = /yaudahlahya/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `finally`,
    closeGroup: true,
    openGroup: true
  };
}
