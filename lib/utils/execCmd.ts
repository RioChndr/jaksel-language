import * as vm from 'vm';

export function cmdToTs(cmds: any) {
  let resultCmds = '';

  let isOpenGroup = false;
  for (const cmd of cmds) {
    let tempRes = cmd.exp;
    if (cmd.closeGroup) {
      tempRes = '} ' + tempRes;
      isOpenGroup = false;
    }
    if (cmd.openGroup) {
      tempRes = tempRes + ' {';
      isOpenGroup = true;
    }
    resultCmds += tempRes + '\n';
  }
  if (isOpenGroup) {
    resultCmds += ' }';
  }

  return resultCmds;
}

export function execCmd(cmds: any) {
  const resultCmds = cmdToTs(cmds);
  vm.runInThisContext(resultCmds);
}
