const decrementVar = (msg) => {
  let format = /([a-zA-Z0-9]+) toxic$/
  let match = msg.match(format)
  if (!match) return null;

  return {
    exp: `${match[1]}--;`
  }
}

module.exports = decrementVar;
