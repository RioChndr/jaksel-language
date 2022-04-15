const booleanValue = (msg) => {
  if (msg.match(/positive vibes$/) || msg.match(/worth it$/)) {
    return "true";
  } else if (msg.match(/negative vibes$/)) {
    return "false";
  }

  return null;
};

const valueTransform = (msg) => {
  let transforms = [booleanValue];

  for (const transform of transforms) {
    let res = transform(msg);
    if (res) {
      return res;
    }
  }

  // if not transformed
  return msg;
};

module.exports = valueTransform;
