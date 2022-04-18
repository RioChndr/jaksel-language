"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function functionDeclarationBegin(test) {
    var _a;
    const format = /so about (\w+)((\s\w+)*)?/;
    const match = test.match(format);
    if (!match)
        return null;
    const [, funcName, paramNames] = match;
    const params = (_a = paramNames === null || paramNames === void 0 ? void 0 : paramNames.trim().split(/\s+/)) !== null && _a !== void 0 ? _a : [];
    const paramsStringified = params.reduce((p, c, idx, arr) => (idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`), "").trim();
    return {
        exp: `function ${funcName}(${paramsStringified})`,
        openGroup: true,
    };
}
exports.default = functionDeclarationBegin;
