"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parsers_utilities_1 = require("../parsers.utilities");
function varAssign(test) {
    const format = /literally ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/;
    const match = test.match(format);
    if (!match)
        return null;
    return {
        exp: `let ${match[1]} = ${(0, parsers_utilities_1.valueReplacements)(match[2])};`,
    };
}
exports.default = varAssign;
