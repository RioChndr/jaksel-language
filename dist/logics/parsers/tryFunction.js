"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tryFunction(test) {
    const format = /trust issue/;
    const match = test.match(format);
    if (!match)
        return null;
    return {
        exp: `try`,
        openGroup: true,
    };
}
exports.default = tryFunction;
