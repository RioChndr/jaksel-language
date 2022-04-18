#!/usr/bin/env node
const path = require("path");
const vm = require("vm");
const fsAsync = require("fs/promises");

const { Command } = require("commander");

const { flexing, commandsStringify } = require("./lib/utils");

const isJakselFile = (file) => path.extname(file) === ".jaksel";

const readJakselFile = async (file) => {
  try {
    await fsAsync.access(file);
  } catch (error) {
    throw new Error(`File "${file}" not found, make sure file exist`);
  }

  if (!isJakselFile(file)) {
    throw new Error(`Unsupported file format`);
  }

  return await fsAsync.readFile(file, "utf-8");
};

const cli = new Command("jaksel-language")
  .version("1.0.2")
  .argument("<files...>")
  .option("-d, --debug", "Debug")
  .action(async (files, options) => {
    if (Array.isArray(files)) {
      const moreThanOne = files.length > 1;

      const divider = "=".repeat(96);

      for (const file of files) {
        try {
          const data = await readJakselFile(file);

          const stringified = commandsStringify(flexing(data)).trim();

          if (options?.debug) {
            console.log(`\nSOURCE: ${file}`);
            console.log(data);

            console.log("\nCOMPILED:");
            console.log(stringified);

            console.log("\nRUN:");
            vm.runInThisContext(stringified);
          } else {
            moreThanOne && console.log(`\nSOURCE: ${file}`);
            vm.runInThisContext(stringified);
          }

          moreThanOne && console.log("\n" + divider);
        } catch (error) {
          console.log(error);
        }
      }
    }
  })
  .showHelpAfterError();

cli.parse(process.argv);
