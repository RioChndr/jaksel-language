/**
 * @param msg {string}
 */
const functionCall = (msg) => {
  let format = /call (\w+)((\s\w+)*)?/;
  let match = msg.match(format);
  if (!match) return null;

  const [, funcName, paramValues] = match;

  
  
  return {
    exp: `${funcName}(${paramsStringified(paramValues) || ifItisAString(msg)});`
  }
};

const paramsStringified = (paramValues)=>{
  return (paramValues?.trim().split(/\s+/) ?? []).reduce((p, c, idx, arr) => idx !== arr.length - 1 ? `${p} ${c},` : `${p} ${c}`,'').trim() 
  
}

const ifItisAString = ()=>{
  const cmnds = msg.split(" ")
  var cmnd = ""
  for (let index = 2; index < cmnds.length; index++) {
    cmnd += `${cmnds[index]}, `
  };
  return msg.split(" ")[2]
}

module.exports = functionCall;
