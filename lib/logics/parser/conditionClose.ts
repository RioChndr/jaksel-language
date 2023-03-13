export default function conditionClose(msg: string) {
  const format = /udahan$/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: ``,
    closeGroup: true
  };
}
