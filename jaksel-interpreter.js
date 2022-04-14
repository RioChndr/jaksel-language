#!/usr/bin/env node
const fs = require('fs');
const vm = require('vm');

let fileLocate = null
const parseArgs = () => {
  const args = process.argv;
  if (args.length < 3) {
    console.log("Require file args, ex: 'node jaksel-interpreter.js example/example1.jaksel' or 'jaksel example/example1.jaksel'");
    return false;
  }

  fileLocate = args[2];
  if(!fs.existsSync(fileLocate)){
    console.log(`File "${args[2]}" not found, please verify file location`)
    return false;
  }
  return true;
}

if(!parseArgs()){
  process.exit(1)
}

const inputJaksel = fs.readFileSync(fileLocate, 'utf-8')

function flexing(input){
  let cmds = []
  const cmdLines = input.split('\n').filter(v => !!v)
  cmds = getCmd(cmdLines)
  return cmds;
}

function getCmd(cmdLines){
  let parser = [
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
  ]

  return cmdLines.map((line) => {
    let cmd = null
    
    for (const parse of parser) {
      cmd = parse(line)
      if(cmd) break;

    }

    return cmd
  }).filter((v) => !!v)
}

let mapCompare = {
  'itu': ' == ',
  'gak': ' != ',
  'lebih gede': ' > ',
  'lebih kecil': ' < ',
  'lebih gede sama dengan': ' >= ',
  'lebih kecil sama dengan': ' <= '
}

const varAssign = (msg) => {
  let format = /literally ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/
  let match = msg.match(format)
  if(!match) return null;

  return {
    exp: `let ${match[1]} = ${valueTransform(match[2])};`
  }
}

const varReassign = (msg) => {
  let format = /whichis ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/
  let match = msg.match(format)
  if(!match) return null;

  return {
    exp: `${match[1]} = ${valueTransform(match[2])};`
  }
}

const constAssign = (msg) => {
  let format = /seriously ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/
  let match = msg.match(format)
  if(!match) return null;

  return {
    exp: `const ${match[1]} = ${valueTransform(match[2])};`
  }
}

const valueTransform = (msg) => {
  let transforms = [
    booleanValue,
  ]

  for (const transform of transforms) {
    let res = transform(msg)
    if(res) {
      return res
    }
  }
  // if not transformed
  return msg;
}

const booleanValue = (msg) => {
  if(msg.match(/positive vibes$/)){
    return 'true'
  }
  if(msg.match(/worth it$/)){
    return 'true'
  }
  if(msg.match(/negative vibes$/)){
    return 'false'
  }
  return null
}

const consoleLog = (msg) => {
  let format = /spill (.*)/
  let match = msg.match(format)
  if(!match) return null;

  return {
    exp: `console.log(${match[1]});`
  }
}

const conditionIf = (msg) => {
  let format = /kalo ([a-zA-Z0-9]+) ([a-zA-Z ]+) ([^\[\]\(\)\n]+)/
  let match = msg.match(format)
  if(!match) return null;
  if(match[2]){
    match[2] = mapCompare[match[2]]
  }

  return {
    exp: `if (${match[1]} ${match[2]} ${valueTransform(match[3])})`,
    openGroup: true
  }
}

const conditionElIf = (msg) => {
  let format = /perhaps ([a-zA-Z0-9]+) ([a-zA-Z ]+) ([^\[\]\(\)\n]+)/
  let match = msg.match(format)
  if(!match) return null;
  if(match[2]){
    match[2] = mapCompare[match[2]]
  }

  return {
    exp: `else if (${match[1]} ${match[2]} ${valueTransform(match[3])})`,
    closeGroup: true,
    openGroup: true
  }
}

const conditionElse = (msg) => {
  let format = /kalogak$/
  let match = msg.match(format)
  if(!match) return null;

  return {
    exp: `else`,
    closeGroup: true,
    openGroup: true
  }
}

const conditionClose = (msg) => {
  let format = /udahan$/
  let match = msg.match(format)
  if(!match) return null;

  return {
    exp: ``,
    closeGroup: true,
  }
}

const loopFor = (msg) => {
  let format = /fomo ([a-zA-Z0-9]+) endup ([a-zA-Z0-9]+)/
  let match = msg.match(format)
  if(!match) return null;
  
  return {
    exp: `for(let ${match[1]} = 0; ${match[1]} <= ${match[2]}; ${match[1]}++)`,
    openGroup: true
  }
}

/**
 * @param msg {string}
 * note: function name must be alphabet followed by optional alphanumeric [A-Za-z0-9] or underscore (_)
 */
 const functionDeclarationBegin = (msg) => {
  let format = /so about (\w+)((\s\w+)*)?/
  let match = msg.match(format);
  if (!match) return null;
  
  const [,funcName, paramNames] = match
  const params = paramNames?.trim().split(/\s+/) ?? []
  const paramsStringified = params.reduce((p, c, idx, arr) => idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`,'').trim();
  return {
    exp: `function ${funcName}(${paramsStringified})`,
    openGroup: true,
  }
}

/**
 * @param msg {string}
 */
const functionDeclarationEnd = (msg) => {
  let format = /thats it sih/
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: '',    
    closeGroup: true
  }
}

/**
 * @param msg {string}
 */
const functionCall = (msg) => {
  let format = /call (\w+)((\s\w+)*)?/
  let match = msg.match(format);
  if (!match) return null;

  const [,funcName, paramValues] = match

  const params = paramValues?.trim().split(/\s+/) ?? []
  const paramsStringified = params.reduce((p, c, idx, arr) => idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`,'').trim();

  return {    
    exp: `${funcName}(${paramsStringified});`
  }
}

const throwError = (msg) => {
  const format = /toxic (.*)/
  const match = msg.match(format)
  if(!match) return null;

  return {
    exp: `throw new Error(${match[1]});`
  }
}

const tryFn = (msg) => {
  let format = /trust issue/
  let match = msg.match(format)
  if(!match) return null;

  return {
    exp: `try`,
    openGroup: true,
  }
}

const catchFn = (msg) => {
  let format = /backstab/
  let match = msg.match(format)
  if(!match) return null;

  return {
    exp: `catch`,
    closeGroup: true,
    openGroup: true
  }
}

const finallyFn = (msg) => {
  let format = /yaudahlahya/
  let match = msg.match(format)
  if(!match) return null;

  return {
    exp: `finally`,
    closeGroup: true,
    openGroup: true

  }
}

const execCmd = (cmds) => {
  let resultCmds = '';

  let isOpenGroup = false
  for (const cmd of cmds) {
    let tempRes = cmd.exp
    if(cmd.closeGroup){
      tempRes = '} ' + tempRes
      isOpenGroup = false
    }
    if(cmd.openGroup){
      tempRes = tempRes + ' {'
      isOpenGroup = true
    }
    resultCmds += tempRes + '\n'
  }
  if(isOpenGroup){
    resultCmds += ' }'
  }
 
  vm.runInThisContext(resultCmds)
}

const result = flexing(inputJaksel)
execCmd(result)
