const booleanValue = (msg) => {
  if (msg.match(/positive vibes$/) || msg.match(/worth it$/)) {
    return "true";
  } else if (msg.match(/negative vibes$/)) {
    return "false";
  }

  return null;
};

const arrayValue = (msg) => {
  let arr = [];
  if (msg.match(/start from/)) {
    let modify = msg.split(' ').filter((word) => !['whichis', 'foo', 'itu', 'start', 'from'].includes(word));
    arr = modify[0].split(",")
  }
  return `[${arr}]`;
}

const valueTransform = (msg) => {
  let transforms = [booleanValue, arrayValue];

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
