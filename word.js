var Letter = require("./letters.js");

var Word = function (word) {

  this.buildWord = function (word) {
      var lettersBank = [];
      for (var i = 0; i < word.length; i++) {
          var currentLetter = new Letter(word[i]);
          lettersBank.push(currentLetter);
      }
      return lettersBank;
    }
    this.letters = this.buildWord(word);
    this.chosenWord = word;

    this.checkGuess = function (guess) {

      for (var i = 0; i < this.letters.length; i++) {
          this.letters[i].letterGuess(guess);

      }
  }


  module.exports = Word;
