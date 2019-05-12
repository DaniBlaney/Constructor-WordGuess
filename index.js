var inquirer = require("inquirer");

var Word = require("./word.js");

var guesses = 10;
var points = 0;

var wordsToGuess = ["Thanos", "Spider Man", "Iron Man", "Captain America", "Thor", "Black Widow", "Hulk", "Ant-Man", "War Machine", "Captain Marvel", "Deadpool", "Nick Furry", "Star-Lord", "Gamora", "Nebula", "Ghost Rider", "Loki", "Jean Grey", "Juggernaut", "Rogue", "Wolverine", "Rocket Raccoon", "Professor X", "Thing", "Mystique"];
var randomWord;
var chosenWord;

function startGame() {
  console.log("It's time to guess Marvel characters!");
}

function chooseRandomWord() {

  randomWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)]

  chosenWord = new Word(randomWord);
}
function guessWord() {

  if (guesses > 0 && points < 5) {

      console.log(chosenWord.display());

      inquirer.prompt([
        {
            name: "txt",
            message: "Guess a letter!",
            validate: function (str) {
                if (str.length != 1) return false;
                var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
                return regEx.test(str);
            }

        }]).then(function (guessedLetter) {

        var guess = guessedLetter.txt;

        chosenWord.checkGuess(guess);
