"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function conditionElse(test) {
    const format = /kalogak$/;
    const match = test.match(format);
    if (!match)
        return null;
    return {
        exp: `else`,
        closeGroup: true,
        openGroup: true,
    };
}
exports.default = conditionElse;
