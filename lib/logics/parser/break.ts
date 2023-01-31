export default function breakStatement(msg) {
  const format = /stop/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `break;`
  };
}
