"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function finallyFunction(test) {
    const format = /yaudahlahya/;
    const match = test.match(format);
    if (!match)
        return null;
    return {
        exp: `finally`,
        closeGroup: true,
        openGroup: true,
    };
}
exports.default = finallyFunction;
