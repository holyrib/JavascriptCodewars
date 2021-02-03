function narcissistic(value) {
  let power = value.toString().length;
  let digits = value.toString().split('');
  let res = 0;
  for(i = 0; i < power; i++){
    res += digits[i] ** power;
  }
  return res==value;
}

/*
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
    
https://www.codewars.com/kata/5287e858c6b5a9678200083c/javascript
*/