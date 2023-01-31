/**
 * @param msg {string}
 */
export default function functionCall(msg) {
  const format = /call (\w+)((\s(\w+|".*"))*)/;
  const match = msg.match(format);
  if (!match) return null;

  const [, funcName, argValues = ''] = match;

  /**
   * if function doesn't have arguments
   */
  if (argValues.trim() === '') {
    return {
      exp: `${funcName}();`
    };
  }

  /**
   * Match arg1, arg2, ..., argN on function call.
   * Argument can be variable, string literal, native boolean literal (true and false), or number.
   * e.g:
   * call helloFunction "a string literal" aVariable 4
   *
   * we can even have string literal with escaped quotes
   * e.g:
   * call tellNextStory "and then Romeo says \"I love you\" to Juliet"
   */
  const paramFormat =
    /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|[^\s]+/g;
  const params = argValues.trim().match(paramFormat);

  return {
    exp: `${funcName}(${params.join()});`
  };
}
