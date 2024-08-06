export default function throwError(msg: string) {
  const format = /toxic (.*)/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `throw new Error(${match[1]});`
  };
}
