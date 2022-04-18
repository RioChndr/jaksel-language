"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function conditionClose(test) {
    const format = /udahan$/;
    const match = test.match(format);
    if (!match)
        return null;
    return {
        exp: ``,
        closeGroup: true,
    };
}
exports.default = conditionClose;
