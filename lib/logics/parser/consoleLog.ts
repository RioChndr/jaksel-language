export default function consoleLog(msg: string) {
  const format = /spill (.*)/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `console.log(${match[1]});`
  };
}
