let word = "banane";
let guess = [];
let score = 7;

for (let letter of word) {
  guess.push("_");
}

while (guess.includes("_")) {
  let letter = prompt(score + " coups restant, mot à deviner : \n" + guess.join(' '));

  if (word.includes(letter)) {
    for (let i = 0; i < word.length; i++) {
      if(word[i] === letter) {
        guess[i] = letter
      }
    }
  }
  else {
    score --;
    if(score === 0) {
      alert("Vous avez été pendu !");
      break;
    }
  }
}

alert("Bravo vous avez deviné le mot");
