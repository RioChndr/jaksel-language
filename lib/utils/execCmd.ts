import * as vm from 'vm';
interface ICmd {
  exp: string;
  closeGroup?: boolean;
  openGroup?: boolean;
}
export function cmdToTs(cmds: ICmd[]) {
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

export function execCmd(cmds: ICmd[]) {
  const resultCmds = cmdToTs(cmds);
  vm.runInThisContext(resultCmds);
}
