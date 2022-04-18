"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function consoleLog(test) {
    const format = /spill (.*)/;
    const match = test.match(format);
    if (!match)
        return null;
    return {
        exp: `console.log(${match[1]});`,
    };
}
exports.default = consoleLog;
