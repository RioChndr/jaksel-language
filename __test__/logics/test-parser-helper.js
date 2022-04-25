const { cmdToJs, flexing } = require('../../lib/utils')

const getJsFormat = (input) => {  
  const cmd = flexing(input)
  return cmdToJs(cmd)
}

module.exports = getJsFormat