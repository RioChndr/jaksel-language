export const operatorMap = {
  ["itu"]: " == ",
  ["gak"]: " != ",
  ["lebih gede"]: " > ",
  ["lebih kecil"]: " < ",
  ["lebih gede sama dengan"]: " >= ",
  ["lebih kecil sama dengan"]: " <= ",
} as const;

// declare operatorReplacements function if possible

export const booleanReplacement = (test: string) => {
  if (test.match(/positive vibes$/) || test.match(/worth it$/)) {
    return "true";
  } else if (test.match(/negative vibes$/)) {
    return "false";
  }

  return null;
};

export const valueReplacements = (test: string) => {
  const replacements = [booleanReplacement];

  for (const transform of replacements) {
    const res = transform(test);
    if (res) return res;
  }

  return test;
};
