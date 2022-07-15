module.exports = function check(str, bracketsConfig) {
  if(str.length % 2) {
    return false;
  }
  let strBegin = '';
  let strEnd = '';
  for(let i = 0; i < bracketsConfig.length; i++) {
    strBegin = strBegin + bracketsConfig[i][0];
    strEnd = strEnd + bracketsConfig[i][1];
  }
  if(strBegin.indexOf(str[0]) == -1 || strEnd.indexOf(str[str.length - 1]) == -1) {
    return false;
  }
  let index = 0;
  while(index < str.length && index >= 0) {
    let indexBracked = strBegin.indexOf(str[index]);
    let indexBrackEnd = strEnd.indexOf(str[index]);
    if(indexBracked >= 0) {
      if(str[index + 1] == strEnd[indexBracked]) {
        str = str.substring(0, index) + str.substring(index + 2, str.length);
        index = index > 0 ? index - 1 : 0;
      }
      else {
        index++;
      }
    }
    else if(indexBrackEnd >= 0) {
      return false;
    }
  }
  if(str.length > 0) return false;
  return true;
}
