import { Command } from "commander";

import { commandsStringify, flexing } from "./utilities";

import { readJakselFile } from "./cli.utilities";

const cli = new Command("jaksel-language")
  .version("1.0.2")
  .argument("<files...>")
  .option("-d, --debug", "Debug")
  .action(async (files, options) => {
    if (Array.isArray(files)) {
      const moreThanOne = files.length > 1;

      const divider = "=".repeat(96);

      for (const file of files as string[]) {
        try {
          const data = await readJakselFile(file);

          const stringified = commandsStringify(flexing(data)).trim();

          if (options?.debug) {
            console.log(`\nSOURCE: ${file}`);
            console.log(data);

            console.log("\nCOMPILED:");
            console.log(stringified);

            console.log("\nEVAL:");
            eval(stringified);
          } else {
            moreThanOne && console.log(`\nSOURCE: ${file}`);
            eval(stringified);
          }

          moreThanOne && console.log("\n" + divider);
        } catch (error) {
          console.log(error);
        }
      }
    }
  })
  .showHelpAfterError();

export default cli;
