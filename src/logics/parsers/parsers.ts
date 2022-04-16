import { mapCompare, valueTransform } from "../parsers.utilities";

export const catchFn = (test: string) => {
  const format = /backstab/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `catch`,
    closeGroup: true,
    openGroup: true,
  };
};

export const conditionClose = (test: string) => {
  const format = /udahan$/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: ``,
    closeGroup: true,
  };
};

export const conditionElIf = (test: string) => {
  const format = /perhaps ([a-zA-Z0-9]+) ([a-zA-Z ]+) ([^\[\]\(\)\n]+)/;
  const match = test.match(format);
  if (!match) return null;
  if (match[2]) {
    match[2] = mapCompare[match[2] as keyof typeof mapCompare]; //maybe return undefined
  }

  return {
    exp: `else if (${match[1]} ${match[2]} ${valueTransform(match[3])})`,
    closeGroup: true,
    openGroup: true,
  };
};

export const conditionElse = (test: string) => {
  const format = /kalogak$/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `else`,
    closeGroup: true,
    openGroup: true,
  };
};

export const conditionIf = (test: string) => {
  const format = /kalo ([a-zA-Z0-9]+) ([a-zA-Z ]+) ([^\[\]\(\)\n]+)/;
  const match = test.match(format);
  if (!match) return null;
  if (match[2]) {
    match[2] = mapCompare[match[2] as keyof typeof mapCompare]; //maybe return undefined
  }

  return {
    exp: `if (${match[1]} ${match[2]} ${valueTransform(match[3])})`,
    openGroup: true,
  };
};

export const consoleLog = (test: string) => {
  const format = /spill (.*)/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `console.log(${match[1]});`,
  };
};

export const constAssign = (test: string) => {
  const format = /seriously ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `const ${match[1]} = ${valueTransform(match[2])};`,
  };
};

export const finallyFn = (test: string) => {
  const format = /yaudahlahya/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `finally`,
    closeGroup: true,
    openGroup: true,
  };
};

export const functionCall = (test: string) => {
  const format = /call (\w+)((\s\w+)*)?/;
  const match = test.match(format);
  if (!match) return null;

  const [, funcName, paramValues] = match;

  const params = paramValues?.trim().split(/\s+/) ?? [];
  const paramsStringified = params.reduce((p, c, idx, arr) => (idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`), "").trim();

  return {
    exp: `${funcName}(${paramsStringified});`,
  };
};

export const functionDeclarationBegin = (test: string) => {
  const format = /so about (\w+)((\s\w+)*)?/;
  const match = test.match(format);
  if (!match) return null;

  const [, funcName, paramNames] = match;
  const params = paramNames?.trim().split(/\s+/) ?? [];
  const paramsStringified = params.reduce((p, c, idx, arr) => (idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`), "").trim();
  return {
    exp: `function ${funcName}(${paramsStringified})`,
    openGroup: true,
  };
};

export const functionDeclarationEnd = (test: string) => {
  const format = /thats it sih/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: "",
    closeGroup: true,
  };
};

export const loopFor = (test: string) => {
  const format = /fomo ([a-zA-Z0-9]+) endup ([a-zA-Z0-9]+)/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `for(let ${match[1]} = 0; ${match[1]} <= ${match[2]}; ${match[1]}++)`,
    openGroup: true,
  };
};

export const throwError = (test: string) => {
  const format = /toxic (.*)/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `throw new Error(${match[1]});`,
  };
};

export const tryFn = (test: string) => {
  const format = /trust issue/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `try`,
    openGroup: true,
  };
};

export const varAssign = (test: string) => {
  const format = /literally ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `let ${match[1]} = ${valueTransform(match[2])};`,
  };
};

export const varReassign = (test: string) => {
  const format = /whichis ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/;
  const match = test.match(format);
  if (!match) return null;

  return {
    exp: `${match[1]} = ${valueTransform(match[2])};`,
  };
};
