const booleanValue = (msg) => {
  switch (true) {
    // true boolean value
    case msg.match(/positive vibes$/):
    case msg.match(/worth it$/):
      return "true";

    // false boolean value
    case msg.match(/negative vibes$/):
      return "false";

    default:
      return null;
  }
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
