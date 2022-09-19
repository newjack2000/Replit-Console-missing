function playGuessingGame(numToGuess, totalGuesses = 10){
let prompText = "Enter a number between 1 and 100."

// this section will be fo the loop.

for(let guesses = 1; guesses < totalGuesses; guesses++) {
let num = prompt(promptText)

// check if the user does not enter anything and exists if nothing is entered

if (num == null) {
return 0
}

// checks to see if the value the enter is a number

else if (num == "" || isNan(num)){
prompText = "Please enter a number:"
guesses = guesses - 1
}

else if (num === numToGuess) {
return guesses
}

else if (num > numToGuess) {
console.log(num + "is too small. Guess a larger number.");
}

else if (num < numToGuess) {
console.log(num + "is too large. Guess a smaller number.");
}

return;
}
}

/* triying wity new code only with function, skip calling function
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function playGuessingGame(x, y) {
  
  let promptText = "Enter a number between 1 and 100."

  //for loop. Checks to see if the user doesn't enter anything
  //or if the user enters a number that is not a number
  
  numToGuess = x;
  totalGuesses = y;

  for (let guesses = 1; guesses < totalGuesses; guesses++) {
    //check if the user doesn't enter anything.  If they do not enter anything, exist
    let userGuess = prompt(promptText);

    if (userGuess === null) {
      return 0;
    }

    // checks to see if the value they entered is a number
    else if (userGuess === "" || isNaN(userGuess)) {
      promptText = "Please enter a number";
      guesses--;
    } else if (userGuess > numToGuess) {
      guesses++;
      promptText = "Please enter a number";
      //userGuess = prompt(userGuess + " is too large. Guess a smaller number.");
    } else if (userGuess < numToGuess) {
      guesses++;
      promptText = "Please enter a number";
      //userGuess = prompt(userGuess + " is too small. Guess a smaller number.");
    }  else {
      promptText = "This is not working correctly";
    }

    return guesses;
  }
  }

  var randomNum = Math.random() * 101 | 0,
    totalGuesses = 10;

  console.log("The random number is: " + randomNum);
  // totalGuesses = prompt("How many guesses would you like to make?")

  playGuessingGame(randomNum, totalGuesses);

  */

// this is the code before the update
/*
function playGuessingGame(x, y) {

  let numToGuess = x;
  let totalGuesses = y;
  
  let promptText = "Enter a number between 1 and 100."

  //for loop. Checks to see if the user doesn't enter anything
  //or if the user enters a number that is not a number

  for (let guesses = 1; guesses < totalGuesses; guesses++) {
    //check if the user doesn't enter anything.  If they do not enter anything, exist
    let num = prompt(promptText);

    if (num === null) {
      return 0;
    }

    // checks to see if the value they entered is a number
    else if (num === "" || isNaN(num)) {
      num = prompt(promptText = "Please enter a number");
      guesses--;
    } else if (num > numToGuess) {
      guesses++;
      num = prompt(promptText = "Please enter a number");
      num = prompt(num + " is too large. Guess a smaller number.");
    } else if (num < numToGuess) {
      guesses++;
      num = prompt(promptText = "Please enter a number");
      num = prompt(num + " is too small. Guess a smaller number.");
    }  else {
      promptText = "This is not working correctly";
      }

      }

    return guesses;
  }

  var randomNum = Math.random() * 11 | 0,
    totalGuesses = 10;

  console.log("The random number is: " + randomNum);
  totalGuesses = prompt("How many guesses would you like to make?")

  playGuessingGame(randomNum, totalGuesses);
*/