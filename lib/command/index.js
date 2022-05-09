const handleRun = require("./handleRun");
const handleCompile = require("./handleCompile");

async function commadHandler(arg, opt) {
  if (opt.run) handleRun(arg);
  if (opt.compile) handleCompile(arg);
}

module.exports = commadHandler;
