const booleanValue = (msg) => {
  if (msg.match(/positive vibes$/) || msg.match(/worth it$/)) {
    return 'true';
  } else if (msg.match(/negative vibes$/)) {
    return 'false';
  }

  return null;
};

export default function valueTransform(msg) {
  const transforms = [booleanValue];

  for (const transform of transforms) {
    const res = transform(msg);
    if (res) {
      return res;
    }
  }

  // if not transformed
  return msg;
}
