import {
  catchFn,
  conditionClose,
  conditionElIf,
  conditionElse,
  conditionIf,
  consoleLog,
  constAssign,
  finallyFn,
  functionCall,
  functionDeclarationBegin,
  functionDeclarationEnd,
  loopFor,
  throwError,
  tryFn,
  varAssign,
  varReassign,
} from "./parsers";

const parsers = [
  varAssign,
  varReassign,
  constAssign,
  consoleLog,
  conditionIf,
  conditionElIf,
  conditionElse,
  conditionClose,
  loopFor,
  functionDeclarationBegin,
  functionDeclarationEnd,
  functionCall,
  throwError,
  tryFn,
  catchFn,
  finallyFn,
];

export default parsers;
