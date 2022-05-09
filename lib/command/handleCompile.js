const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const { commandStringify, parsing, readJakselFile } = require("../utils");

function handleCompile(files) {
  const divider = files.length > 1 ? "=".repeat(96) : "";
  for (const file of files) {
    console.log(chalk.yellow(`Start compiling ${file}`));
    console.log("\n");
    let data = readJakselFile(file);

    let js = commandStringify(parsing(data));
    if (js) {
      let outDir = path.dirname(file).split(path.sep).pop();
      let outName = path.basename(file).split(".")[0];
      fs.writeFileSync(`./${outDir}/${outName}.js`, js, "utf-8");
      console.log("\n");
      console.log(chalk.green(`File ${file} compiled successfully `));
      console.log("\n" + divider);
    } else {
      console.log(chalk.red(`File ${file} failed to execute`));
      onsole.log("\n" + divider);
    }
  }
}

module.exports = handleCompile;
