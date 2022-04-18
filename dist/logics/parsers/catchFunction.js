"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function catchFunction(test) {
    const format = /backstab/;
    const match = test.match(format);
    if (!match)
        return null;
    return {
        exp: `catch`,
        closeGroup: true,
        openGroup: true,
    };
}
exports.default = catchFunction;
