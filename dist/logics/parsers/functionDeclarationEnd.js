"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function functionDeclarationEnd(test) {
    const format = /thats it sih/;
    const match = test.match(format);
    if (!match)
        return null;
    return {
        exp: "",
        closeGroup: true,
    };
}
exports.default = functionDeclarationEnd;
