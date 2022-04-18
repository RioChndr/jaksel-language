const varAssign = require("./parser/varAssign");
const varReassign = require("./parser/varReassign");
const constAssign = require("./parser/constAssign");
const consoleLog = require("./parser/consoleLog");
const incrementVar = require("./parser/incrementVar");
const decrementVar = require("./parser/decrementVar");
const commentLine = require("./parser/commentLine");
const conditionIf = require("./parser/conditionIf");
const conditionElIf = require("./parser/conditionElIf");
const conditionElse = require("./parser/conditionElse");
const conditionClose = require("./parser/conditionClose");
const loopFor = require("./parser/loopFor");
const functionDeclarationBegin = require("./parser/functionDeclarationBegin");
const functionDeclarationEnd = require("./parser/functionDeclarationEnd");
const functionCall = require("./parser/functionCall");
const throwError = require("./parser/throwError");
const tryFn = require("./parser/tryFn");
const catchFn = require("./parser/catchFn");
const finallyFn = require("./parser/finallyFn");
const functionDeclarationAsyncBegin = require("./parser/functionDeclarationAsyncBegin");
const awaitProcess = require("./parser/awaitProcess");

function getCmd(cmdLines) {
  let parser = [
    varAssign,
    varReassign,
    constAssign,
    consoleLog,
    incrementVar,
    decrementVar,
    commentLine,
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
    functionDeclarationAsyncBegin,
    awaitProcess

  ];

  return cmdLines
    .map((line) => {
      let cmd = null;

      for (const parse of parser) {
        cmd = parse(line);
        if (cmd) break;
      }

      return cmd;
    })
    .filter((v) => !!v);
}

module.exports = { getCmd };
