/**
 * @param msg {string}
 */
export default function functionDeclarationEnd(msg) {
  const format = /thats it sih/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: '',
    closeGroup: true
  };
}
