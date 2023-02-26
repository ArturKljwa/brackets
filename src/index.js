module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let openBrasket = [];
  let closeBrasket = [];
  for (let i = 0; i < bracketsConfig.length; i++) {

    for (let j = 0; j < bracketsConfig[i].length; j++) {
      if( j % 2 === 0) {
        openBrasket.push(bracketsConfig[i][j])
      }
    else {
      closeBrasket.push(bracketsConfig[i][j]);
    }
  }
}
//console.log(pairBrasket)
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    if(closeBrasket.includes(str[i]) && stack.length > 0 && closeBrasket.indexOf(str[i]) === openBrasket.indexOf(topElement)) {
      stack.pop();
    }
    else if (openBrasket.includes(currentSymbol)) {

      stack.push(currentSymbol);

    } else  {
 return false
      }
    }
//console.log(stack)
  return  stack.length === 0;
}