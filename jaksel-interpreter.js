#!/usr/bin/env node
const commadHandler = require("./lib/command");
const { Command } = require("commander");
const cli = new Command("jaksel-language").version("1.0.2");

cli.argument("<files...>").option("-r,--run,run", "run jaksel script").option("-c,--compile,compile", "compile jaksel script").action(commadHandler);

cli.parse(process.argv);
