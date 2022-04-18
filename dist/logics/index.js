"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommands = void 0;
const parsers_1 = __importDefault(require("./parsers"));
function getCommands(lines) {
    return lines
        .map((line) => {
        for (const parser of parsers_1.default) {
            let command = parser(line);
            if (command)
                return command;
        }
        return null;
    })
        .filter(Boolean);
}
exports.getCommands = getCommands;
