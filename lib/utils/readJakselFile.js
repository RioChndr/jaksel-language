const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

function readJakselFile(file) {
  let isJakselFile = path.extname(file) === ".jaksel";
  if (!fs.existsSync(file)) {
    console.log(chalk.red(`File ${file} not found, make sure file exist`));
    return;
  } else {
    if (!isJakselFile) {
      console.log(chalk.red(`please use .jaksel file format`));
      return;
    } else {
      return fs.readFileSync(file, "utf-8");
    }
  }
}

module.exports = readJakselFile;
