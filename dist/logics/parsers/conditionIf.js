"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parsers_utilities_1 = require("../parsers.utilities");
function conditionIf(test) {
    const format = /kalo ([a-zA-Z0-9]+) ([a-zA-Z ]+) ([^\[\]\(\)\n]+)/;
    const match = test.match(format);
    if (!match)
        return null;
    if (match[2]) {
        match[2] = parsers_utilities_1.operatorMap[match[2]];
    }
    return {
        exp: `if (${match[1]} ${match[2]} ${(0, parsers_utilities_1.valueReplacements)(match[3])})`,
        openGroup: true,
    };
}
exports.default = conditionIf;
