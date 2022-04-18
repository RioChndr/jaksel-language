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
const commander_1 = require("commander");
const utilities_1 = require("./utilities");
const cli_utilities_1 = require("./cli.utilities");
const cli = new commander_1.Command("jaksel-language")
    .version("1.0.2")
    .argument("<files...>")
    .option("-d, --debug", "Debug")
    .action((files, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (Array.isArray(files)) {
        const moreThanOne = files.length > 1;
        const divider = "=".repeat(96);
        for (const file of files) {
            try {
                const data = yield (0, cli_utilities_1.readJakselFile)(file);
                const stringified = (0, utilities_1.commandsStringify)((0, utilities_1.flexing)(data)).trim();
                if (options === null || options === void 0 ? void 0 : options.debug) {
                    console.log(`\nSOURCE: ${file}`);
                    console.log(data);
                    console.log("\nCOMPILED:");
                    console.log(stringified);
                    console.log("\nEVAL:");
                    eval(stringified);
                }
                else {
                    moreThanOne && console.log(`\nSOURCE: ${file}`);
                    eval(stringified);
                }
                moreThanOne && console.log("\n" + divider);
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}))
    .showHelpAfterError();
exports.default = cli;
