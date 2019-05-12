var inquirer = require("inquirer");

var Word = require("./word.js");

var guesses = 10;
var points = 0;

var wordsToGuess = ["Thanos", "Spider Man", "Iron Man", "Captain America", "Thor", "Black Widow", "Hulk", "Ant-Man", "War Machine", "Captain Marvel", "Deadpool", "Nick Furry", "Star-Lord", "Gamora", "Nebula", "Ghost Rider", "Loki", "Jean Grey", "Juggernaut", "Rogue", "Wolverine", "Rocket Raccoon", "Professor X", "Thing", "Mystique"];
var randomWord;
var chosenWord;

function startGame() {
