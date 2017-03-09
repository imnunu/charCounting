function countLetters (inputWord) {
  //var noSpaces = inputWord.split(' ').join('').toLowerCase();
  var outputObject = {};
// inputWord = inputWord.toLowerCase();

  for (var i = 0; i < inputWord.length; i++){
    // var char = noSpaces.charAt(i);
    var char2 = inputWord[i];

      if (char2 === ' ') {
        continue;
      } else if (outputObject.hasOwnProperty(char2)){
        outputObject[char2] = outputObject[char2] + 1;
      } else {
        outputObject[char2] = 1;
      }
    // if (char2 in outputObject) {
    //   outputObject[char2] = outputObject[char2] + 1;

    // } else {
    //     outputObject[char2] = 1;
    // }

  }
return outputObject;
}
console.log(countLetters('lighthouse in the house'));
