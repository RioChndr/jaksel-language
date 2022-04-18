"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueReplacements = exports.booleanReplacement = exports.operatorMap = void 0;
exports.operatorMap = {
    ["itu"]: " == ",
    ["gak"]: " != ",
    ["lebih gede"]: " > ",
    ["lebih kecil"]: " < ",
    ["lebih gede sama dengan"]: " >= ",
    ["lebih kecil sama dengan"]: " <= ",
};
const booleanReplacement = (test) => {
    if (test.match(/positive vibes$/) || test.match(/worth it$/)) {
        return "true";
    }
    else if (test.match(/negative vibes$/)) {
        return "false";
    }
    return null;
};
exports.booleanReplacement = booleanReplacement;
const valueReplacements = (test) => {
    const replacements = [exports.booleanReplacement];
    for (const transform of replacements) {
        const res = transform(test);
        if (res)
            return res;
    }
    return test;
};
exports.valueReplacements = valueReplacements;
