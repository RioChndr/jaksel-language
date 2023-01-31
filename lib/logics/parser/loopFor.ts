export default function loopFor(msg) {
  const format = /fomo ([a-zA-Z0-9]+) endup ([a-zA-Z0-9]+)/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `for(let ${match[1]} = 0; ${match[1]} <= ${match[2]}; ${match[1]}++)`,
    openGroup: true
  };
}
