export default function loopForOf(msg) {
  const format =
    /fomo semua ([a-zA-Z]+[a-zA-Z0-9]*) dari ([a-zA-Z]+[a-zA-Z0-9]*)/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `for (const ${match[1]} of ${match[2]})`,
    openGroup: true
  };
}
