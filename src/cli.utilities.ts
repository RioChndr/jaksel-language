import { extname } from "path";
import { access, readFile } from "fs/promises";

export const isJakselFile = (file: string) => extname(file) === ".jaksel";

export const readJakselFile = async (file: string) => {
  try {
    await access(file);
  } catch (error) {
    throw new Error(`File "${file}" not found, make sure file exist`);
  }

  if (!isJakselFile(file)) {
    throw new Error(`Unsupported file format`);
  }

  return await readFile(file, "utf-8");
};
