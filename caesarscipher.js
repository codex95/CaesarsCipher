function rot13(str) {
  // Create alphabet string
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Create an empty string for result
  let result = "";
  // Loop through str
  for (let i = 0; i < str.length; i++){
    if (alphabet.indexOf(str[i]) >= 13){
      // If statement for alphabet index > 13 (N to Z)
      result += alphabet[alphabet.indexOf(str[i])-13];
    } else if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1){
      // If statement for alphabet index < 13 && > -1 (A to M) 
      result += alphabet[alphabet.indexOf(str[i])+13];
    } else {
      // To add spaces
      result += str[i];
    }
  };
  return result;
}

console.log(rot13("SERR PBQR PNZC"));
