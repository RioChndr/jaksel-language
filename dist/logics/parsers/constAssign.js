"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parsers_utilities_1 = require("../parsers.utilities");
function constAssign(test) {
    const format = /seriously ([a-zA-Z0-9]+) itu ([^\[\]\(\)\n]+)/;
    const match = test.match(format);
    if (!match)
        return null;
    return {
        exp: `const ${match[1]} = ${(0, parsers_utilities_1.valueReplacements)(match[2])};`,
    };
}
exports.default = constAssign;
