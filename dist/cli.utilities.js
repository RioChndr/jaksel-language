"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJakselFile = exports.isJakselFile = void 0;
const path_1 = require("path");
const promises_1 = require("fs/promises");
const isJakselFile = (file) => (0, path_1.extname)(file) === ".jaksel";
exports.isJakselFile = isJakselFile;
const readJakselFile = (file) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, promises_1.access)(file);
    }
    catch (error) {
        throw new Error(`File "${file}" not found, make sure file exist`);
    }
    if (!(0, exports.isJakselFile)(file)) {
        throw new Error(`Unsupported file format`);
    }
    return yield (0, promises_1.readFile)(file, "utf-8");
});
exports.readJakselFile = readJakselFile;
