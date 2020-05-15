// Function
function askCommand() {
  const commands = ["j", "r", "q"];
  let command = "";
  while(!commands.includes(command)) {
    command = prompt("Que souhaitez-vous faire : j : jouer, r : règles, q : quitter");
  }
  return command;
}

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

function askLetter(guess, score) {
  let letter;
  do {
    letter = prompt(score + " coups restant, mot à deviner : \n" + guess.join(' '));
  } while (letter.length !== 1);
  return letter;
}

function updateGuess(word, guess, letter) {
  for (let i = 0; i < word.length; i++) {
    if(word[i] === letter) {
      guess[i] = letter
    }
  }
}

function play() {
  let score = 7;
  let word = getRandomWord();
  let guess = getEmptyArray(word);

  while (guess.includes("_") && score > 0) {
    let letter = askLetter(guess, score);

    if (word.includes(letter)) {
      updateGuess(word, guess, letter);
    }
    else {
      score --;
    }
  }
  if(score === 0) {
    alert("Vous avez été pendu !");
  }
  else {
    alert("Bravo, le mot était : " + word);
  }
}


// Logic

while(true) {
  let command = askCommand();
  if(command === "j") {
    play();
  }
  else if(command === "r") {
    alert("Voici les règles du jeu");
  }
  else {
    alert("A bientôt");
    break;
  }
}
