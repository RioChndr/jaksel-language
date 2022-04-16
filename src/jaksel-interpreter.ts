#!/usr/bin/env node
import { extname } from "path";
import fs from "fs/promises";
import { execCommands, flexing } from "./utilities";

const getFirstArgument = () => {
  const argv = process.argv.slice(2);
  if (argv.length < 1) {
    throw new Error(
      "Require one argument as target, ex: 'node jaksel-interpreter.js example/example1.jaksel' or 'jaksel example/example1.jaksel'"
    );
  }

  return argv[0];
};

const readFile = async (file: string) => {
  try {
    await fs.access(file);
  } catch (error) {
    throw new Error(`File "${file}" not found, make sure file exist`);
  }

  const ext = extname(file);

  if (ext !== ".jaksel") {
    throw new Error(`Unsupported file format`);
  }

  return await fs.readFile(file, "utf-8");
};

const start = async () => {
  try {
    const file = getFirstArgument();

    const data = await readFile(file);

    execCommands(flexing(data));
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    } else {
      console.log("Something went wrong");
    }
  }
};

start();
