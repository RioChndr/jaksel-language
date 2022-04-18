"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forLoop(test) {
    const format = /fomo ([a-zA-Z0-9]+) endup ([a-zA-Z0-9]+)/;
    const match = test.match(format);
    if (!match)
        return null;
    return {
        exp: `for(let ${match[1]} = 0; ${match[1]} <= ${match[2]}; ${match[1]}++)`,
        openGroup: true,
    };
}
exports.default = forLoop;
