"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchFunction_1 = __importDefault(require("./catchFunction"));
const conditionClose_1 = __importDefault(require("./conditionClose"));
const conditionElse_1 = __importDefault(require("./conditionElse"));
const conditionElseIf_1 = __importDefault(require("./conditionElseIf"));
const conditionIf_1 = __importDefault(require("./conditionIf"));
const consoleLog_1 = __importDefault(require("./consoleLog"));
const constAssign_1 = __importDefault(require("./constAssign"));
const finallyFunction_1 = __importDefault(require("./finallyFunction"));
const forLoop_1 = __importDefault(require("./forLoop"));
const functionCall_1 = __importDefault(require("./functionCall"));
const functionDeclarationBegin_1 = __importDefault(require("./functionDeclarationBegin"));
const functionDeclarationEnd_1 = __importDefault(require("./functionDeclarationEnd"));
const throwError_1 = __importDefault(require("./throwError"));
const tryFunction_1 = __importDefault(require("./tryFunction"));
const varAssign_1 = __importDefault(require("./varAssign"));
const varReassign_1 = __importDefault(require("./varReassign"));
const parsers = [
    varAssign_1.default,
    varReassign_1.default,
    constAssign_1.default,
    consoleLog_1.default,
    conditionIf_1.default,
    conditionElseIf_1.default,
    conditionElse_1.default,
    conditionClose_1.default,
    forLoop_1.default,
    functionDeclarationBegin_1.default,
    functionDeclarationEnd_1.default,
    functionCall_1.default,
    throwError_1.default,
    tryFunction_1.default,
    catchFunction_1.default,
    finallyFunction_1.default,
];
exports.default = parsers;
