import varAssign from './parser/varAssign';
import varReassign from './parser/varReassign';
import constAssign from './parser/constAssign';
import consoleLog from './parser/consoleLog';
import conditionIf from './parser/conditionIf';
import conditionElIf from './parser/conditionElIf';
import conditionElse from './parser/conditionElse';
import conditionClose from './parser/conditionClose';
import loopFor from './parser/loopFor';
import loopForOf from './parser/loopForOf';
import functionDeclarationBegin from './parser/functionDeclarationBegin';
import functionDeclarationEnd from './parser/functionDeclarationEnd';
import functionCall from './parser/functionCall';
import throwError from './parser/throwError';
import tryFn from './parser/tryFn';
import catchFn from './parser/catchFn';
import finallyFn from './parser/finallyFn';
import functionDeclarationAsyncBegin from './parser/functionDeclarationAsyncBegin';
import awaitProcess from './parser/awaitProcess';
import breakStatement from './parser/break';
import continueStatement from './parser/continue';
interface IParser {
  (msg: string): {
    exp: string;
  };
}
export default function getCmd(cmdLines: string[]) {
  const parser: IParser[] = [
    varAssign,
    varReassign,
    constAssign,
    consoleLog,
    conditionIf,
    conditionElIf,
    conditionElse,
    conditionClose,
    loopForOf,
    loopFor,
    functionDeclarationBegin,
    functionDeclarationEnd,
    functionCall,
    throwError,
    tryFn,
    catchFn,
    finallyFn,
    functionDeclarationAsyncBegin,
    awaitProcess,
    breakStatement,
    continueStatement
  ];

  return cmdLines
    .map((line: string) => {
      let cmd = null;
      for (const parse of parser) {
        cmd = parse(line);
        if (cmd) break;
      }

      return cmd;
    })
    .filter((v) => !!v);
}
