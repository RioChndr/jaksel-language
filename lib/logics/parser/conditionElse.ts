export default function conditionElse(msg: string) {
  const format = /kalogak$/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `else`,
    closeGroup: true,
    openGroup: true
  };
}
