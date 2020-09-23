function accum(s) {
  var mumble = ""
	for(let i = 0; i < s.length; i++){
    for(let j = 0; j < i + 1; j++){
      if (j == 0){
        mumble = mumble.concat(s[i].toUpperCase());
      }
      else{
          mumble = mumble.concat(s[i].toLowerCase());
      }
    }
    mumble = mumble.concat('-')
  }
  return mumble.substring(0, mumble.length - 1);;
}