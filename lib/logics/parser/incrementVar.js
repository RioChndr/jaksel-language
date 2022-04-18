const incrementVar = (msg) => {
  let format = /([a-zA-Z0-9]+) healthy$/
  let match = msg.match(format)
  if (!match) return null;

  return {
    exp: `${match[1]}++;`
  }
}

module.exports = incrementVar;
