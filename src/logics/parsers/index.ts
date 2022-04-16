import catchFunction from "./catchFunction";
import conditionClose from "./conditionClose";
import conditionElse from "./conditionElse";
import conditionElseIf from "./conditionElseIf";
import conditionIf from "./conditionIf";
import consoleLog from "./consoleLog";
import constAssign from "./constAssign";
import finallyFunction from "./finallyFunction";
import forLoop from "./forLoop";
import functionCall from "./functionCall";
import functionDeclarationBegin from "./functionDeclarationBegin";
import functionDeclarationEnd from "./functionDeclarationEnd";
import throwError from "./throwError";
import tryFunction from "./tryFunction";
import varAssign from "./varAssign";
import varReassign from "./varReassign";

const parsers = [
  //
  varAssign,
  varReassign,
  constAssign,
  //
  consoleLog,
  //
  conditionIf,
  conditionElseIf,
  conditionElse,
  conditionClose,
  //
  forLoop,
  //
  functionDeclarationBegin,
  functionDeclarationEnd,
  //
  functionCall,
  //
  throwError,
  //
  tryFunction,
  catchFunction,
  finallyFunction,
];

export default parsers;
