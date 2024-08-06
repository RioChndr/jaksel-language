export default function continueStatement(msg: string) {
  const format = /skip/;
  const match = msg.match(format);
  if (!match) return null;
  return {
    exp: `continue;`
  };
}
