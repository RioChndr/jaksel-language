function commandStringify(cmds) {
  if (cmds) {
    let resultCmds = "";

    for (const cmd of cmds) {
      let tempRes = cmd.exp.replace(/\r?\n|\r/g, "");
      resultCmds += tempRes + "\n";
    }

    return resultCmds;
  } else {
    return;
  }
}

module.exports = commandStringify;
