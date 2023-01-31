export default function breakStatement(msg: string) {
  const format = /stop/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `break;`
  };
}
