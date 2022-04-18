"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function throwError(test) {
    const format = /toxic (.*)/;
    const match = test.match(format);
    if (!match)
        return null;
    return {
        exp: `throw new Error(${match[1]});`,
    };
}
exports.default = throwError;
