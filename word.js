var Letter = require("./letters.js");

var Word = function (word) {

  this.buildWord = function (word) {
      var lettersBank = [];
      for (var i = 0; i < word.length; i++) {
          var currentLetter = new Letter(word[i]);
          lettersBank.push(currentLetter);
      }
