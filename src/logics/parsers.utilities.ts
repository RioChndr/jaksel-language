export const mapCompare = {
  itu: " == ",
  gak: " != ",
  "lebih gede": " > ",
  "lebih kecil": " < ",
  "lebih gede sama dengan": " >= ",
  "lebih kecil sama dengan": " <= ",
} as const;

export const booleanValue = (test: string) => {
  if (test.match(/positive vibes$/) || test.match(/worth it$/)) {
    return "true";
  } else if (test.match(/negative vibes$/)) {
    return "false";
  }

  return null;
};

export const valueTransform = (test: string) => {
  const transforms = [booleanValue];

  for (const transform of transforms) {
    const res = transform(test);
    if (res) return res;
  }

  return test;
};
