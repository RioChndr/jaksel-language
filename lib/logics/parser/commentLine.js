const commentLine = (msg) => {
  let format = /(IMO|FYI) (.*)/
  let match = msg.match(format)
  if (!match) return null;

  return {
    exp: `// ${match[2]}`
  }
}

module.exports = commentLine;
