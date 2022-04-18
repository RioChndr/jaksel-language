"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function functionCall(test) {
    var _a;
    const format = /call (\w+)((\s\w+)*)?/;
    const match = test.match(format);
    if (!match)
        return null;
    const [, funcName, paramValues] = match;
    const params = (_a = paramValues === null || paramValues === void 0 ? void 0 : paramValues.trim().split(/\s+/)) !== null && _a !== void 0 ? _a : [];
    const paramsStringified = params.reduce((p, c, idx, arr) => (idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`), "").trim();
    return {
        exp: `${funcName}(${paramsStringified});`,
    };
}
exports.default = functionCall;
