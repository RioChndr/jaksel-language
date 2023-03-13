#!/usr/bin/env ts-node
import * as fs from 'fs';
import { flexing, execCmd } from './lib/utils/index';

let fileLocate = null;
const parseArgs = () => {
  const args = process.argv;

  if (args.length < 3) {
    console.log(
      "Require file args, ex: 'ts-node jaksel-interpreter.ts example/example1.jaksel' or 'jaksel example/example1.jaksel'"
    );
    return false;
  }

  fileLocate = args[2];
  if (!fs.existsSync(fileLocate)) {
    console.log(`File "${args[2]}" not found, please verify file location`);
    return false;
  }

  return true;
};

if (!parseArgs()) {
  process.exit(1);
}

const inputJaksel = fs.readFileSync(fileLocate, 'utf-8');

const result = flexing(inputJaksel);
execCmd(result);
