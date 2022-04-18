"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commandsStringify_1 = __importDefault(require("./commandsStringify"));
const execCommands = (cmds) => {
    const stringified = (0, commandsStringify_1.default)(cmds);
    eval(stringified);
};
exports.default = execCommands;
