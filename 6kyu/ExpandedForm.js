function expandedForm(num) {
  let result = '';
  numStr = num.toString();
  zeronum = numStr.length - 1;
  for(let i = 0; i < numStr.length; i++){
    if(numStr[i] != 0){
      result += numStr[i];
    }
    else{
      zeronum -= 1;
      continue;
    }
    for(j = 0; j < zeronum; j++){
      result += '0';
    
    }
    zeronum -= 1;
    result+= ' + '; 
  }
  return result.substring(0, result.length - 3);
}

/*Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
https://www.codewars.com/kata/5842df8ccbd22792a4000245 */
