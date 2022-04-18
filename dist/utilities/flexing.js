"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logics_1 = require("../logics");
function flexing(input) {
    return (0, logics_1.getCommands)(input.split("\n").filter((v) => !!v));
}
exports.default = flexing;
