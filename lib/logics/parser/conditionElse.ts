export default function conditionElse(msg) {
  const format = /kalogak$/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `else`,
    closeGroup: true,
    openGroup: true
  };
}
