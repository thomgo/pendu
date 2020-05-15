// Variables
let score = 7;


// Function
function getRandomWord() {
  const words = ["banane", "terre", "voiture", "jouet"];
  let index = Math.floor(Math.random() * Math.floor(words.length));
  return words[index];
}

function getEmptyArray(word) {
  let result = []
  for (let letter of word) {
    result.push("_");
  }
  return result;
}

function updateGuess(letter) {
  for (let i = 0; i < word.length; i++) {
    if(word[i] === letter) {
      guess[i] = letter
    }
  }
}

// Logic

let word = getRandomWord();
let guess = getEmptyArray(word);

while (guess.includes("_")) {
  let letter = prompt(score + " coups restant, mot à deviner : \n" + guess.join(' '));

  if (word.includes(letter)) {
    updateGuess(letter);
  }
  else {
    score --;
    if(score === 0) {
      alert("Vous avez été pendu !");
      break;
    }
  }
}
