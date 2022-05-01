const vm = require("vm");
const { commandStringify, parsing, readJakselFile } = require("../utils");
const chalk = require("chalk");

function handleRun(files) {
  const divider = files.length > 1 ? "=".repeat(96) : "";
  for (const file of files) {
    console.log(chalk.yellow(`Start running ${file}`));
    console.log("\n");
    let data = readJakselFile(file);

    let js = commandStringify(parsing(data));
    if (js) {
      vm.runInThisContext(js);
      console.log("\n");
      console.log(chalk.green(`File ${file} executed successfully`));
      console.log("\n" + divider);
    } else {
      console.log(chalk.red(`File ${file} failed to execute`));
      console.log("\n" + divider);
    }
  }
}

module.exports = handleRun;
