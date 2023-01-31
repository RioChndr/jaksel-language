export default function conditionClose(msg) {
  const format = /udahan$/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: ``,
    closeGroup: true
  };
}
