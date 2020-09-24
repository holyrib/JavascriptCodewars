function findOdd(A) {
  var temp = 0;
  var count = 0;
  for(let i = 0; i < A.length; i++){
    temp = A[i];
    for(let j = 0; j < A.length; j++){
      if(A[j] == temp){
        count++;
      }
    }
    if(count%2 != 0){
      console.log(temp, count)
      return temp;
    }
  }
  return 0;
}


/*
Description:

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/